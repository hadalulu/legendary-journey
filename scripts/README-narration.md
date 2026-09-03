# Generate the narrated story

`generate_narration.py` uses the xAI/Grok Text-to-Speech API to create one
44.1 kHz WAV file per storybook page. It uses only Python's standard library.

## Run it

Create an API key in the xAI console, then keep it in an environment variable
(never put it in this repository):

```bash
export XAI_API_KEY="your-key-here"
python3 scripts/generate_narration.py
```

The output is `audio/narration/page-01.wav` through `page-22.wav`.

To test selected pages before generating the full story:

```bash
python3 scripts/generate_narration.py --page 7 --page 14 --page 20
```

The script caches individual lines in `audio/narration/.segments/`, making an
interrupted run inexpensive to resume. Use `--force` only when you want to
regenerate those cached lines.

## Cast and effects

- Narrator: `ara`
- Lulú: `eve`
- Emma: `aurora`
- Raquel: `celeste`
- Tiger: `zagan`
- Goblins: `sirius`, with four distinct speed/pitch styles

The goblins use xAI speech tags for deep, squeaky, slow, and sing-song tones,
plus laughs, chuckles, giggles, and tongue clicks. Edit the `VOICES` and
`PAGES` constants near the top of the script to audition a different cast or
performance.
