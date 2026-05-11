import json

def test():
    try:
        1/0
    except Exception as e:
        # e.__class__.__name__ vs deterministic mapping
        print(e.__class__.__name__)
test()
