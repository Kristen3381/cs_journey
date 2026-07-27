# ── BUBBLE SORT ──────────────────────────────
# Repeatedly compares adjacent items and swaps
# them if they're in the wrong order
# Like bubbles rising to the surface

def bubble_sort(arr):
    n = len(arr)
    steps = 0
    for i in range(n):
        for j in range(0, n - i - 1):
            steps += 1
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    print(f"Bubble sort: {arr} ({steps} steps)")
    return arr


# ── MERGE SORT ───────────────────────────────
# Divide the list in half repeatedly until
# you have single items, then merge them back
# in sorted order — divide and conquer

def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])
    return result


# ── QUICK SORT ───────────────────────────────
# Pick a pivot, put everything smaller to the
# left and everything larger to the right
# Recursively sort each side

def quick_sort(arr):
    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]

    return quick_sort(left) + middle + quick_sort(right)


# ── TEST ALL THREE ────────────────────────────
numbers = [64, 34, 25, 12, 22, 11, 90]

print("Original:", numbers)
print()

bubble_sort(numbers.copy())

result = merge_sort(numbers.copy())
print(f"Merge sort:  {result}")

result = quick_sort(numbers.copy())
print(f"Quick sort:  {result}")
