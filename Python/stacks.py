def is_balanced(expression):
    stack = Stack()
    opening = "({["
    closing = ")}]"
    pairs = {")": "(", "}": "{", "]": "["}

    for char in expression:
        if char in opening:
            stack.push(char)
        elif char in closing:
            if stack.is_empty():
                return False
            if stack.pop() != pairs[char]:
                return False

    return stack.is_empty()


# Test it
print(is_balanced("(hello + {world})"))   # True
print(is_balanced("(hello + {world}"))    # False — missing closing )
print(is_balanced("[({})]"))              # True
print(is_balanced("[(])"))               # False — wrong order
