import os
import re

def check_adr_format(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    errors = []
    if '## 状态 / Status' not in content:
        errors.append("Missing '## 状态 / Status' header")
    if '## 背景 / Context' not in content:
        errors.append("Missing '## 背景 / Context' header")
    if '## 决策 / Decision' not in content:
        errors.append("Missing '## 决策 / Decision' header")
    if '[CN]' not in content:
        errors.append("Missing [CN]")
    if '[EN]' not in content:
        errors.append("Missing [EN]")
    return errors

def check_methodology_format(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    errors = []
    if '[CN]' not in content:
        errors.append("Missing [CN]")
    if '[EN]' not in content:
        errors.append("Missing [EN]")
    return errors

def check_code_format(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    errors = []
    for i, line in enumerate(lines):
        if 'time.time()' in line:
            errors.append(f"Line {i+1}: time.time() found")
        if re.search(r'\bhash\(', line):
            errors.append(f"Line {i+1}: hash() found")
        if 'str(e)' in line:
            errors.append(f"Line {i+1}: str(e) found")
        if '.isoformat()' in line and 'timespec' not in line:
            errors.append(f"Line {i+1}: .isoformat() without timespec found")
    return errors

adr_errors = {}
for root, dirs, files in os.walk('ADR'):
    for file in files:
        if file.endswith('.md'):
            filepath = os.path.join(root, file)
            errs = check_adr_format(filepath)
            if errs: adr_errors[filepath] = errs

method_errors = {}
for root, dirs, files in os.walk('METHODOLOGY'):
    for file in files:
        if file.endswith('.md'):
            filepath = os.path.join(root, file)
            errs = check_methodology_format(filepath)
            if errs: method_errors[filepath] = errs

code_errors = {}
for root, dirs, files in os.walk('CODE'):
    for file in files:
        if file.endswith('.py'):
            filepath = os.path.join(root, file)
            errs = check_code_format(filepath)
            if errs: code_errors[filepath] = errs

print("ADR Errors:")
for k, v in adr_errors.items():
    print(f"{k}: {v}")
print("\nMETHODOLOGY Errors:")
for k, v in method_errors.items():
    print(f"{k}: {v}")
print("\nCODE Errors:")
for k, v in code_errors.items():
    print(f"{k}: {v}")
