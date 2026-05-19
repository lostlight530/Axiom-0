#!/bin/bash
success_count=0
fail_count=0
for i in {1..100}; do
    output=$(python CODE/nexus_core.py 2>&1)
    if echo "$output" | grep -q "System Successfully Solidified at Absolute Zero-Entropy"; then
        success_count=$((success_count+1))
    else
        fail_count=$((fail_count+1))
        echo "Failed on iteration $i:"
        echo "$output"
        break
    fi
done
echo "Success: $success_count, Fail: $fail_count"
