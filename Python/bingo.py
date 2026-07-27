import time

# O(1) — Constant time
# No matter how big the list, always takes the same time
def get_first(arr):
    return arr[0]

# O(n) — Linear time
# Time grows proportionally with input size
def find_item(arr, target):
    for item in arr:
        if item == target:
            return True
    return False

# O(n²) — Quadratic time
# Two nested loops — gets very slow very fast
def has_duplicates(arr):
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] == arr[j]:
                return True
    return False

# O(log n) — Logarithmic time
# Binary search — eliminates half the list each step
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    steps = 0
    while left <= right:
        steps += 1
        mid = (left + right) // 2
        if arr[mid] == target:
            print(f"Found in {steps} steps")
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1


# Compare speeds on a large list
large_list = list(range(1, 100001))   # 100,000 numbers

print("--- Speed Comparison ---")

start = time.time()
get_first(large_list)
print(f"O(1)  get_first:      {time.time() - start:.8f} seconds")

start = time.time()
find_item(large_list, 99999)
print(f"O(n)  find_item:      {time.time() - start:.8f} seconds")

start = time.time()
binary_search(large_list, 99999)
print(f"O(log n) binary_search: {time.time() - start:.8f} seconds")

print()
print("--- Binary Search Steps ---")
print("Searching in 100,000 items:")
binary_search(large_list, 99999)
print("(A linear search would take up to 100,000 steps!)")

print()
print("--- Big O Cheat Sheet ---")
print("O(1)      → Constant  — instant, best possible")
print("O(log n)  → Log       — binary search, BST")
print("O(n)      → Linear    — single loop")
print("O(n log n)→ Log Linear— merge sort, quick sort")
print("O(n²)     → Quadratic — nested loops, bubble sort")
print("O(2ⁿ)     → Exponential— avoid at all costs!")
