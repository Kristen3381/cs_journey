class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        new_node = Node(value)
        if self.root is None:
            self.root = new_node
            return
        current = self.root
        while True:
            if value < current.value:
                if current.left is None:
                    current.left = new_node
                    return
                current = current.left
            else:
                if current.right is None:
                    current.right = new_node
                    return
                current = current.right

    def search(self, value):
        current = self.root
        steps = 0
        while current is not None:
            steps += 1
            if value == current.value:
                print(f"Found {value} in {steps} steps!")
                return True
            elif value < current.value:
                print(f"{value} < {current.value} — go left")
                current = current.left
            else:
                print(f"{value} > {current.value} — go right")
                current = current.right
        print(f"{value} not found.")
        return False

    def inorder(self, node, result=None):
        if result is None:
            result = []
        if node is not None:
            self.inorder(node.left, result)
            result.append(node.value)
            self.inorder(node.right, result)
        return result


# Build the tree
bst = BinarySearchTree()
for value in [50, 30, 70, 20, 40, 60, 80]:
    bst.insert(value)

# Search for values
print("--- Searching ---")
bst.search(60)
print()
bst.search(25)
print()

# Inorder traversal always prints a BST in sorted order
print("--- Inorder Traversal (should be sorted) ---")
print(bst.inorder(bst.root))

