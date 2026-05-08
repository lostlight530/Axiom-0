import json
from datetime import datetime, timezone
class SystemMetrics:
    def __init__(self):
        self.timestamp = datetime.now(timezone.utc)
metrics = SystemMetrics()
try:
    print(json.dumps(metrics.__dict__))
except Exception as e:
    print("Error:", e)
