from pathlib import Path
import json
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'data/models.json').read_text())
(root/'data/models.js').write_text('window.MODEL_DATA = '+json.dumps(data,indent=2)+';\n')
print('Updated data/models.js')
