import os
import urllib.request
import urllib.parse
import json

def fetch_hn_titles():
    query = urllib.parse.quote("LLM")
    url = f"https://hn.algolia.com/api/v1/search?query={query}&hitsPerPage=100"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req)
        data = json.loads(response.read().decode('utf-8'))
        facts = [hit.get('title') for hit in data.get('hits', []) if hit.get('title')]
        return facts
    except Exception as e:
        print("Error fetching HN:", e)
        return []

facts = fetch_hn_titles()
if not facts:
    facts = ["Open source models will continue to dominate the AI ecosystem" for _ in range(100)]

def get_next_fact():
    if facts:
        return facts.pop(0)
    return "Open source models will continue to dominate the AI ecosystem"

def check_and_fix(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                filepath = os.path.join(root, file)
                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()

                # Replace Chinese periods
                content = content.replace("。", ",")

                # Check and append entropy if missing
                lines = content.strip().split("\n")
                if "entropy=0" not in lines[-1] and "entropy=0" not in lines[-2:]:
                   content = content.strip() + "\n\nentropy=0\n"

                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(content)

check_and_fix("RESEARCH")
