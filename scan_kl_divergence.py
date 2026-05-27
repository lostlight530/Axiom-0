import os
import math

def calculate_kl_divergence(p, q):
    if not p or not q or len(p) != len(q):
        raise ValueError("Distributions must be non-empty and of the same length.")

    sum_p = sum(p)
    sum_q = sum(q)

    if sum_p == 0 or sum_q == 0:
        raise ValueError("Sum of distribution probabilities cannot be zero.")

    p_norm = [x / sum_p for x in p]
    q_norm = [x / sum_q for x in q]

    divergence = 0.0
    for i in range(len(p_norm)):
        if p_norm[i] > 0:
            if q_norm[i] == 0:
                return float('inf')
            divergence += p_norm[i] * math.log(p_norm[i] / q_norm[i])
    return divergence

def check_system():
    # Run the compliance scan to get actual error count
    import subprocess
    import sys

    res = subprocess.run([sys.executable, "code_compliance.py"], capture_output=True, text=True)
    errors_count = res.stdout.count("Line ")

    res2 = subprocess.run([sys.executable, "scan_consistency.py"], capture_output=True, text=True)
    errors_count += res2.stdout.count("Missing ")

    print(f"Total alignment errors detected: {errors_count}")

    # Simulating distribution P (Actual State) and Q (Ideal Zero-Entropy State)
    p_dist = [0.1 + (errors_count * 0.01), 0.2, 0.7 - (errors_count * 0.01)]
    q_dist = [0.1, 0.2, 0.7]

    try:
        kl_score = calculate_kl_divergence(p_dist, q_dist)
        print(f"KL Divergence: {kl_score}")
        if kl_score > 0.05:
            print("ZECP Violation: Entropy spike detected (KL > 0.05). Triggering T-08 Pruning.")
            raise RuntimeError("ZECP Violation: Entropy spike detected (KL > 0.05)")
        else:
            print("System Coherent. Zero-Entropy Maintained.")
    except Exception as e:
        print(f"Error: {e.__class__.__name__}")
        sys.exit(1)

if __name__ == "__main__":
    check_system()
