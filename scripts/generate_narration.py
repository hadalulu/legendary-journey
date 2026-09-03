#!/usr/bin/env python3
"""Generate one Spanish WAV narration file for every storybook page.

Uses xAI's Text-to-Speech REST API. Set XAI_API_KEY in your environment
before running this script. Generated speech segments are cached locally so
an interrupted run can resume without paying to synthesize completed lines.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
from pathlib import Path
import sys
import time
import urllib.error
import urllib.request
import wave


API_URL = "https://api.x.ai/v1/tts"
LANGUAGE = "es-MX"
SAMPLE_RATE = 44_100
PAUSE_MS = 360

# The four goblins share a base voice so they sound related, but use distinct
# rates and documented xAI speech tags for clearly different personalities.
VOICES = {
    "narrator": {"voice": "ara", "speed": 0.88},
    "lulu": {"voice": "eve", "speed": 0.98},
    "emma": {"voice": "aurora", "speed": 0.95},
    "raquel": {"voice": "celeste", "speed": 0.96},
    "goblin_1": {"voice": "sirius", "speed": 1.04},  # deep schemer
    "goblin_2": {"voice": "sirius", "speed": 1.14},  # squeaky and eager
    "goblin_3": {"voice": "sirius", "speed": 0.90},  # slow dramatist
    "goblin_4": {"voice": "sirius", "speed": 1.20},  # silly show-off
    "tiger": {"voice": "zagan", "speed": 0.88},
}


def line(role: str, text: str) -> dict[str, str]:
    return {"role": role, "text": text}


# Speech tags are sent to xAI, but are not spoken aloud. Each inner list is one
# finished page; its segments are synthesized separately, then joined to WAV.
PAGES = [
    [line("narrator", "<soft><slow>La Poderosa Hada Lulú.</slow></soft>")],
    [line("narrator", "Había una vez un hada muy hermosa y muy poderosa llamada Lulú. [pause] Las hadas son muy pequeñitas, más o menos del tamaño de un dedo. Tienen alas brillantes como las de una mariposa y viven en un bosque encantado, muy, muy lejos de las casas de los niños. Las hadas tienen muchos poderes mágicos: pueden volar muy rápido, hablar con los animalitos, hacerse invisibles y, con un movimiento de su varita, hacer que las flores y las plantas crezcan al instante.")],
    [line("narrator", "El hada Lulú era una de las hadas más poderosas y volaba más rápido que todas las demás. [pause] Además, tenía un pequeño tigre muy especial. Cuando Lulú le hacía un guiño, el tigrito crecía de repente y se convertía en un enorme tigre protector. Con un gran rugido espantaba a los malos, y todos salían corriendo.")],
    [line("narrator", "¿Sabes quiénes son los malos que siempre enojan a las hadas, Lulú? [pause] Son los duendes. [pause] Los duendes son unas criaturitas pequeñitas, del tamaño de un peluche. Tienen la piel verde, orejas grandes y puntiagudas, una nariz redonda y una sonrisa traviesa. Les encanta hacer bromas, como esconder un calcetín, mover un juguete de lugar o hacer mucho desorden. No son malos de verdad. Solo son muy, muy traviesos y casi nunca piensan antes de hacer una travesura.")],
    [line("narrator", "Cada noche, las hadas salen volando de su bosque encantado para visitar, en secreto, las casas de los niños mientras duermen. Llevan consigo un polvito mágico y brillante llamado polvo de hada, que ayuda a que los niños tengan sueños felices y tranquilos. [pause] Entran muy despacito en cada habitación y dejan caer un poquito de polvo sobre los niños dormidos. Entonces, los niños sueñan con aventuras, arcoíris, dinosaurios amistosos y cachorritos juguetones.")],
    [line("narrator", "Una noche, justo cuando el hada Lulú iba a salir del bosque encantado, escuchó unas risitas detrás de un árbol."), line("goblin_2", "<whisper>[giggle] Je, je, je...</whisper>"), line("narrator", "Lulú se acercó muy despacito para escuchar.")],
    [line("narrator", "Eran cuatro duendes."), line("goblin_1", "<lower-pitch>[chuckle] ¡Hoy vamos a hacer la travesura más grande de todas!</lower-pitch>"), line("goblin_2", "<higher-pitch><fast>¡Vamos a llevarnos todo el polvo de hada!</fast></higher-pitch>"), line("goblin_3", "<lower-pitch><slow>¡Después lo llevaremos a los otros duendes que nos esperan en el bosque y lo aventaremos por los aires para hacer una nube brillante!</slow></lower-pitch> [laugh]"), line("goblin_4", "[tongue-click] <higher-pitch><sing-song>¡Y yo me voy a lavar las pompis con el polvo de hada!</sing-song></higher-pitch> [giggle]"), line("narrator", "Los cuatro duendes se morían de la risa."), line("goblin_1", "[laugh]"), line("goblin_2", "[giggle]"), line("goblin_3", "[chuckle]"), line("goblin_4", "[laugh]")],
    [line("narrator", "Lulú abrió mucho los ojos."), line("lulu", "<build-intensity>¡Oh, no! Si se llevan todo el polvo de hada, las hadas ya no podrán llevar sueños felices a los niños en las próximas noches.</build-intensity> [pause] ¡Ya sé! Yo soy el hada más rápida. Iré por ayuda."), line("narrator", "Y salió volando tan, tan rápido que parecía una estrella cruzando el cielo.")],
    [line("narrator", "Muy pronto encontró a sus amigas, las hadas Emma y Raquel."), line("lulu", "¡Los duendes quieren llevarse el polvo mágico!"), line("emma", "<loud>¡Vamos!</loud>"), line("raquel", "<loud>¡Vamos!</loud>"), line("lulu", "<loud>¡Vamos!</loud>"), line("narrator", "Las tres hadas llegaron al castillo tan rápido como pudieron y corrieron hasta la sala donde guardaban el polvo de hada.")],
    [line("lulu", "[inhale] ¡Ay, no!"), line("narrator", "El gran cofre del polvo de hada estaba abierto. [long-pause] ¡Y estaba completamente vacío! [long-pause] Por un momento, las tres hadas se quedaron en silencio.")],
    [line("narrator", "Emma señaló por la ventana."), line("emma", "<build-intensity>¡Miren! ¡Sale humo del bosque! Si no lo apagamos, podría convertirse en un gran incendio. ¡Yo iré!</build-intensity>"), line("narrator", "Raquel miró hacia una colina cercana."), line("raquel", "¡Y allá hay un grupo enorme de duendes esperando a los cuatro ladrones! ¡Yo voy a detenerlos!"), line("narrator", "Lulú vio un caminito de polvo brillante que se perdía entre los árboles."), line("lulu", "Yo seguiré el rastro, recuperaré el polvo de hada y luego nos reuniremos."), line("narrator", "Y las tres salieron volando, cada una hacia su importante misión.")],
    [line("narrator", "Emma siguió el humo hasta encontrar una fogata que los duendes habían dejado encendida. Levantó su varita."), line("emma", "<loud>¡Lluvia mágica!</loud>"), line("narrator", "Al instante comenzó a llover. ¡Plin, plin, plin! En pocos segundos, el fuego se apagó."), line("emma", "[sigh] ¡El bosque está a salvo!")],
    [line("narrator", "Mientras tanto, Raquel encontró al gran grupo de duendes esperando a los ladrones. Levantó su varita."), line("raquel", "<loud>¡Enredaderas, crezcan ahora!</loud>"), line("narrator", "Al instante, unas enredaderas crecieron del suelo y atraparon a todos los duendes."), line("raquel", "¡Listo! ¡Ahora los ladrones no tendrán dónde esconderse!")],
    [line("narrator", "Al mismo tiempo, Lulú siguió el caminito de polvo brillante y encontró a los cuatro duendes que llevaban el saco de polvo de hada."), line("goblin_1", "<lower-pitch><loud>¡Ni se te ocurra usar tu magia!</loud> Si levantas tu varita, romperemos el saco y todo el polvo se perderá.</lower-pitch>"), line("narrator", "Lulú sonrió."), line("lulu", "Muy bien. Entonces... no usaré mi magia."), line("narrator", "Los duendes empezaron a reír."), line("goblin_2", "<higher-pitch>[giggle] Je, je, je.</higher-pitch>"), line("goblin_3", "[chuckle]"), line("goblin_4", "[laugh]")],
    [line("narrator", "Pero Lulú le guiñó un ojo a su tigrito. El tigrito dio un saltito. [pause] ¡Puf! En un abrir y cerrar de ojos se convirtió en un enorme tigre protector."), line("tiger", "<lower-pitch><loud>¡Rooooaaar!</loud></lower-pitch>"), line("narrator", "Los duendes dieron un brinco del susto y salieron corriendo, dejando el saco de polvo de hada en el suelo. Lulú lo recogió y sonrió."), line("lulu", "¡Lo recuperamos!")],
    [line("narrator", "Lulú voló hasta la colina donde estaban Emma y Raquel. Allí, Raquel había atrapado al gran grupo de duendes. Poco después llegaron corriendo los cuatro ladrones y las enredaderas también los atraparon."), line("lulu", "¡Lo logramos!"), line("emma", "¡Y el bosque está a salvo!"), line("narrator", "Pero Lulú se quedó pensativa."), line("lulu", "Ahora que conocen el camino al castillo... ¿qué podemos hacer para que no vuelvan?")],
    [line("lulu", "Necesitamos hacer un hechizo muy poderoso. Pero solo funciona si las tres hadas... ¡y la niña Lulú!... respiran juntas. [pause] ¿Nos ayudas, niña Lulú?"), line("narrator", "Sí, ¡a ti! Estamos hablando contigo, nuestra pequeña lectora. Sin tu ayuda, el hechizo no funcionará.")],
    [line("narrator", "<soft><slow>Primero imaginemos que olemos una flor muy bonita. [pause] Respira hondo... [inhale] Uno... dos... tres... [pause] Ahora sopla una velita. [exhale] Fuuuu... [long-pause] Otra vez. [inhale] Uno... dos... tres... [exhale] Fuuuu... [long-pause] Y una última vez. [inhale] Uno... dos... tres... [exhale] Fuuuu...</slow></soft>")],
    [line("narrator", "Las tres hadas apuntaron sus varitas al cielo."), line("lulu", "<build-intensity>¡Luz de luna,</build-intensity>"), line("emma", "<build-intensity>brillo de estrella,</build-intensity>"), line("raquel", "<build-intensity>que los duendes olviden el camino al castillo y recuerden siempre el camino a su hogar!</build-intensity>"), line("narrator", "[long-pause] <loud>¡Zas!</loud>")],
    [line("narrator", "Los duendes parpadearon."), line("goblin_1", "<lower-pitch>¿Qué estábamos haciendo?</lower-pitch>"), line("goblin_2", "<higher-pitch>¡No me acuerdo!</higher-pitch>"), line("goblin_4", "<sing-song>¡Vamos a casa!</sing-song> [giggle]"), line("narrator", "Y se fueron riendo por el bosque."), line("goblin_3", "[chuckle]")],
    [line("narrator", "Lulú guardó el polvo de hada en su lugar. Después, las tres hadas salieron volando para llevar sueños felices a los niños.")],
    [line("narrator", "Lulú miró hacia el cielo y sonrió."), line("lulu", "<soft>Misión cumplida.</soft>"), line("narrator", "<sing-song>Y colorín colorado... ¡este cuento se ha acabado!</sing-song>")],
]


def request_wav(api_key: str, role: str, text: str) -> bytes:
    profile = VOICES[role]
    payload = json.dumps(
        {
            "text": text,
            "voice_id": profile["voice"],
            "language": LANGUAGE,
            "speed": profile["speed"],
            "text_normalization": True,
            "output_format": {"codec": "wav", "sample_rate": SAMPLE_RATE},
        }
    ).encode("utf-8")
    request = urllib.request.Request(
        API_URL,
        data=payload,
        method="POST",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "Accept": "audio/wav",
        },
    )
    for attempt in range(4):
        try:
            with urllib.request.urlopen(request, timeout=120) as response:
                audio = response.read()
            if not audio.startswith(b"RIFF"):
                raise RuntimeError("xAI returned data that is not a WAV file")
            return audio
        except urllib.error.HTTPError as exc:
            details = exc.read().decode("utf-8", errors="replace")
            if exc.code not in {429, 500, 502, 503, 504} or attempt == 3:
                raise RuntimeError(f"xAI TTS failed ({exc.code}): {details}") from exc
        except urllib.error.URLError as exc:
            if attempt == 3:
                raise RuntimeError(f"Could not reach xAI TTS: {exc.reason}") from exc
        time.sleep(2**attempt)
    raise RuntimeError("xAI TTS request failed")


def cached_segment(
    api_key: str, cache_dir: Path, role: str, text: str, force: bool
) -> Path:
    profile = VOICES[role]
    cache_key = json.dumps(
        {"role": role, "text": text, **profile, "language": LANGUAGE},
        ensure_ascii=False,
        sort_keys=True,
    )
    digest = hashlib.sha256(cache_key.encode("utf-8")).hexdigest()[:20]
    path = cache_dir / f"{digest}.wav"
    if force or not path.exists():
        path.write_bytes(request_wav(api_key, role, text))
    return path


def read_wav(path: Path) -> tuple[wave._wave_params, bytes]:
    with wave.open(str(path), "rb") as source:
        return source.getparams(), source.readframes(source.getnframes())


def join_wavs(segment_paths: list[Path], output_path: Path) -> None:
    first_params, first_frames = read_wav(segment_paths[0])
    chunks = [first_frames]
    silence_frames = round(first_params.framerate * PAUSE_MS / 1000)
    silence = b"\x00" * silence_frames * first_params.nchannels * first_params.sampwidth

    for path in segment_paths[1:]:
        params, frames = read_wav(path)
        comparable = (
            params.nchannels,
            params.sampwidth,
            params.framerate,
            params.comptype,
        )
        expected = (
            first_params.nchannels,
            first_params.sampwidth,
            first_params.framerate,
            first_params.comptype,
        )
        if comparable != expected:
            raise RuntimeError(f"Incompatible WAV format in {path}")
        chunks.extend((silence, frames))

    with wave.open(str(output_path), "wb") as target:
        target.setnchannels(first_params.nchannels)
        target.setsampwidth(first_params.sampwidth)
        target.setframerate(first_params.framerate)
        target.setcomptype(first_params.comptype, first_params.compname)
        target.writeframes(b"".join(chunks))


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate one xAI/Grok WAV narration file per storybook page."
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("audio/narration"),
        help="Output folder (default: audio/narration)",
    )
    parser.add_argument(
        "--page",
        type=int,
        action="append",
        help="Only generate this 1-based page number; repeat for multiple pages",
    )
    parser.add_argument(
        "--force", action="store_true", help="Regenerate cached voice segments"
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    api_key = os.environ.get("XAI_API_KEY")
    if not api_key:
        print("XAI_API_KEY is not set. See scripts/README-narration.md.", file=sys.stderr)
        return 2

    if args.page:
        invalid = sorted({number for number in args.page if not 1 <= number <= len(PAGES)})
        if invalid:
            print(f"Invalid page number(s): {invalid}; valid range is 1-{len(PAGES)}", file=sys.stderr)
            return 2
        page_numbers = sorted(set(args.page))
    else:
        page_numbers = list(range(1, len(PAGES) + 1))

    output_dir = args.output.resolve()
    cache_dir = output_dir / ".segments"
    cache_dir.mkdir(parents=True, exist_ok=True)

    for page_number in page_numbers:
        destination = output_dir / f"page-{page_number:02d}.wav"
        print(f"Page {page_number:02d}/{len(PAGES)} -> {destination}")
        segments = []
        for item in PAGES[page_number - 1]:
            print(f"  {item['role']}: {item['text'][:54]}...")
            segments.append(
                cached_segment(
                    api_key, cache_dir, item["role"], item["text"], args.force
                )
            )
        join_wavs(segments, destination)

    print(f"Done. Generated {len(page_numbers)} page file(s) in {output_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
