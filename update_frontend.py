import re

file_path = "FRONTEND/src/pages/Dashboard.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

def sanitize(val):
    if val < 10:
        return val
    return (val // 10) * 10

data_to_add = f"""  {{ repo: "welcome-to-github", period: "07/10", clones: {sanitize(1846)}, uniqueCloners: {sanitize(361)}, views: {sanitize(13)}, uniqueVisitors: {sanitize(8)} }},
  {{ repo: "zero-entropy-lab", period: "07/10", clones: {sanitize(1237)}, uniqueCloners: {sanitize(232)}, views: {sanitize(13)}, uniqueVisitors: {sanitize(4)} }},
  {{ repo: "Axiom-0", period: "07/10", clones: {sanitize(597)}, uniqueCloners: {sanitize(186)}, views: {sanitize(8)}, uniqueVisitors: {sanitize(6)} }},
  {{ repo: "reflective-continuum", period: "07/10", clones: {sanitize(805)}, uniqueCloners: {sanitize(275)}, views: {sanitize(8)}, uniqueVisitors: {sanitize(5)} }},
  {{ repo: "agent-foundations", period: "07/10", clones: {sanitize(456)}, uniqueCloners: {sanitize(190)}, views: {sanitize(6)}, uniqueVisitors: {sanitize(3)} }},
"""

if "];" in content:
    pattern = r'(const rawData: TrafficData\[\] = \[\s*[\s\S]*?)(];)'
    match = re.search(pattern, content)
    if match:
        new_content = content[:match.start(2)] + data_to_add + content[match.start(2):]
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("Updated FRONTEND/src/pages/Dashboard.tsx successfully with sanitized data.")
