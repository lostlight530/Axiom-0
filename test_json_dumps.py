import json
import sys

# mock what's in the loop
try:
    print(json.dumps({"processed_by": "T-01 Ingestion", "payload": "authorized_request_001"}, sort_keys=True))
except Exception as e:
    print(e)
