import json

def test():
    try:
        1/0
    except Exception as e:
        # str(e) vs deterministic mapping
        print(str(e))
test()
