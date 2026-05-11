import os
import re

def check_file(filepath):
    errors = []
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        for i, line in enumerate(lines):
            if 'time.time()' in line:
                errors.append(f"Line {i+1}: 'time.time()' found. Use deterministic alternative.")
            if re.search(r'\bhash\(', line):
                errors.append(f"Line {i+1}: 'hash()' found. Use hashlib.sha256() instead.")
            if 'str(e)' in line:
                errors.append(f"Line {i+1}: 'str(e)' found. Use 'e.__class__.__name__' instead.")
            if '.isoformat()' in line and 'timespec' not in line:
                errors.append(f"Line {i+1}: '.isoformat()' without timespec found. Must use timespec='microseconds'.")
    return errors

def scan_dir(dir_path):
    all_errors = {}
    for root, dirs, files in os.walk(dir_path):
        if '.git' in root or 'node_modules' in root: continue
        for file in files:
            if file.endswith('.py') and file not in ['code_compliance.py', 'scan_consistency.py', 'scan_kl_divergence.py']:
                filepath = os.path.join(root, file)
                errs = check_file(filepath)
                if errs:
                    all_errors[filepath] = errs
    return all_errors

errors = scan_dir('.')
for k, v in errors.items():
    print(f"File: {k}")
    for err in v:
        print(f"  - {err}")
