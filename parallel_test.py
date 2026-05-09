import subprocess
import concurrent.futures

def run_script(i):
    res = subprocess.run(["python", "CODE/nexus_core.py"], capture_output=True, text=True)
    if "System Locked at Zero-Entropy State" not in res.stderr and "System Locked at Zero-Entropy State" not in res.stdout:
        return f"Failed at {i}\n{res.stdout}\n{res.stderr}"
    return None

with concurrent.futures.ThreadPoolExecutor(max_workers=50) as executor:
    results = list(executor.map(run_script, range(2000)))

failures = [r for r in results if r is not None]
print(f"Failures: {len(failures)}")
if failures:
    print(failures[0])
