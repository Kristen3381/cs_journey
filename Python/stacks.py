class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if self.is_empty():
            print("Stack is empty - nothing to pop.")
            return None
        return self.items.pop()

    def peek(self):
        if self.is_empty():
            return None
        return self.items[-1]

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)

    def __str__(self):
        return f"Stack: {self.items} (top is on the right)"

stack = Stack()
stack.push("first")
stack.push("second")
stack.push("third")
print(stack)
print(f"Peek: {stack.peek()}")
print(f"Pop: {stack.pop()}")
print(f"Pop: {stack.pop()}")
print(stack)

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

print(is_balanced("(hello + {world})"))
print(is_balanced("(hello + {world}"))
print(is_balanced("[({})]"))
print(is_balanced("[(])"))
