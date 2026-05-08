import json
from CODE.liquid_morphing import SystemMetrics

try:
    metrics = SystemMetrics()
    json.dumps(metrics.__dict__, sort_keys=True)
    print("Success")
except Exception as e:
    print(f"Failed: {e}")
