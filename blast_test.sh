#!/bin/bash
success_count=0
fail_count=0

for i in {1..100}; do
    output=$(python CODE/nexus_core.py 2>&1)
    if echo "$output" | grep -q "System Locked at Zero-Entropy State"; then
        success_count=$((success_count+1))
    else
        fail_count=$((fail_count+1))
        echo "Run $i failed:"
        echo "$output"
    fi
done

echo "Total Runs: 100"
echo "Successes: $success_count"
echo "Failures: $fail_count"
