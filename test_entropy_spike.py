import math
import sys

def calculate_kl_divergence(p, q):
    sum_p = sum(p)
    sum_q = sum(q)
    p_norm = [x / sum_p for x in p]
    q_norm = [x / sum_q for x in q]
    divergence = 0.0
    for i in range(len(p_norm)):
        if p_norm[i] > 0:
            if q_norm[i] == 0:
                return float('inf')
            divergence += p_norm[i] * math.log(p_norm[i] / q_norm[i])
    return divergence

for data_complexity in range(10):
    p_dist = [0.1 + (data_complexity * 0.01), 0.2, 0.7 - (data_complexity * 0.01)]
    q_dist = [0.15, 0.15, 0.7] # ZECP baseline
    kl_score = calculate_kl_divergence(p_dist, q_dist)
    print(f"Complexity {data_complexity}: KL = {kl_score:.6f}")
