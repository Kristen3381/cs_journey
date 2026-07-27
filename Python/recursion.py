# Recursion = a function that calls itself
# Every recursive function needs:
# 1. A BASE CASE — when to stop
# 2. A RECURSIVE CASE — calling itself with a smaller problem

# Classic example: factorial
# 5! = 5 × 4 × 3 × 2 × 1 = 120
def factorial(n):
    if n == 0:          # base case — stop here
        return 1
    return n * factorial(n - 1)   # recursive case

print(factorial(5))    # 120
print(factorial(10))   # 3628800

# Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13...
# Each number is the sum of the two before it
def fibonacci(n):
    if n <= 1:          # base case
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

for i in range(10):
    print(fibonacci(i), end=" ")
print()

# Call stack visualisation for factorial(4)
def factorial_verbose(n, depth=0):
    indent = "  " * depth
    print(f"{indent}factorial({n}) called")
    if n == 0:
        print(f"{indent}base case! returning 1")
        return 1
    result = n * factorial_verbose(n - 1, depth + 1)
    print(f"{indent}factorial({n}) returning {result}")
    return result

print()
factorial_verbose(4)
