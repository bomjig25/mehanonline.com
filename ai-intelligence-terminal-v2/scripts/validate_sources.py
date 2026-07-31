from pathlib import Path
import json, urllib.request
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'data/models.json').read_text())
failed=[]
for model in data.get('models',[]):
    req=urllib.request.Request(model['source'],method='HEAD',headers={'User-Agent':'Mozilla/5.0 AI-Intelligence-Source-Validator'})
    try:
        with urllib.request.urlopen(req,timeout=20) as response:
            if response.status >= 400: failed.append((model['model'],response.status))
    except Exception as exc:
        failed.append((model['model'],str(exc)))
if failed:
    raise SystemExit('Source validation failures: '+repr(failed))
print(f"Validated {len(data.get('models',[]))} source links")
