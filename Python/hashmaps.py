# Python's dict IS a hash map
# Under the hood, when you write contacts["Alice"] = "0712..."
# Python runs a hash function on "Alice" to get a number,
# then uses that number to decide where in memory to store "0712..."
# This makes lookups almost instant regardless of how big the dict is

# Let's see the hash function Python uses
print("--- Hash Values ---")
print(hash("Alice"))
print(hash("Bob"))
print(hash("Alice"))    # same input always gives same output

# ----- SETS -----
print("\n--- Sets ---")
# A set is like a dict but only stores keys, no values
# Every item must be unique — duplicates are ignored automatically

students = {"Alice", "Bob", "Charlie", "Alice", "Bob"}
print(students)    # duplicates removed automatically

# Set operations
cs_class = {"Alice", "Bob", "Charlie", "Diana"}
math_class = {"Bob", "Diana", "Eve", "Frank"}

print(f"\nCS class: {cs_class}")
print(f"Math class: {math_class}")

# Union — everyone in either class
print(f"Union: {cs_class | math_class}")

# Intersection — only those in BOTH classes
print(f"Intersection: {cs_class & math_class}")

# Difference — in CS but not Math
print(f"In CS but not Math: {cs_class - math_class}")

# ----- REAL INTERVIEW PROBLEM -----
# Two Sum: given a list of numbers and a target,
# find two numbers that add up to the target
# Return their positions (indices)

print("\n--- Two Sum Problem ---")

def two_sum(numbers, target):
    seen = {}    # hash map: value → index

    for index, number in enumerate(numbers):
        complement = target - number
        print(f"  Looking for {complement} to pair with {number}")

        if complement in seen:
            print(f"  Found it! {number} + {complement} = {target}")
            return [seen[complement], index]

        seen[number] = index

    return []    # no solution found


numbers = [3, 7, 2, 11, 5]
target = 9
print(f"Numbers: {numbers}")
print(f"Target: {target}")
result = two_sum(numbers, target)
print(f"Answer: indices {result} → {numbers[result[0]]} + {numbers[result[1]]} = {target}")
