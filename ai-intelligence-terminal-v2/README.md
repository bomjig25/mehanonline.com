# AI Intelligence Terminal — Version 2

A deployable static dashboard for `ashokmehan.com`, designed around simultaneous discovery rather than serial dropdown interactions.

## What changed from Version 1

- Multi-panel terminal landing view
- Capability leaders, matrix, release tape, context landscape, access mix, modality footprint, and source ledger visible together
- Persistent comparison tray for up to four models
- Search without hiding the wider field
- No charting library dependency; all visualizations are HTML/CSS
- Embedded dataset fallback for local `file://` preview

## Preview

Extract the ZIP and open `index.html`. For the closest production behavior, run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy

Upload the entire folder to the desired path on the website. Keep `index.html`, `styles.css`, `app.js`, and the `data/` directory together.

## Data model

`data/models.json` is the canonical dataset. `data/models.js` mirrors it for local-file fallback. When updating the JSON, regenerate the fallback:

```bash
python scripts/build_fallback.py
```

The capability scores are editorial directional signals, not standardized benchmark composites. Specifications should remain tied to official primary sources.
