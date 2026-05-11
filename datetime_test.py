import json
from datetime import datetime, timezone
class SystemMetrics:
    def __init__(self):
        self.timestamp = datetime.now(timezone.utc).isoformat(timespec='microseconds')
metrics = SystemMetrics()
try:
    print(json.dumps(metrics.__dict__, sort_keys=True))
except Exception as e:
    print("Error:", e.__class__.__name__)
