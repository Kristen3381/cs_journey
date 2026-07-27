# A Node is one link in the chain
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None   # points to the next node (None = end of chain)

    def __str__(self):
        return str(self.value)


# The LinkedList manages the whole chain
class LinkedList:
    def __init__(self):
        self.head = None   # the first node (None = list is empty)
        self.length = 0

    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
        else:
            current = self.head
            while current.next is not None:
                current = current.next
            current.next = new_node
        self.length += 1

    def prepend(self, value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node
        self.length += 1

    def delete(self, value):
        if self.head is None:
            print("List is empty.")
            return

        if self.head.value == value:
            self.head = self.head.next
            self.length -= 1
            print(f"Deleted: {value}")
            return

        current = self.head
        while current.next is not None:
            if current.next.value == value:
                current.next = current.next.next
                self.length -= 1
                print(f"Deleted: {value}")
                return
            current = current.next

        print(f"{value} not found in list.")

    def search(self, value):
        current = self.head
        position = 0
        while current is not None:
            if current.value == value:
                print(f"Found {value} at position {position}")
                return True
            current = current.next
            position += 1
        print(f"{value} not found.")
        return False

    def __str__(self):
        result = []
        current = self.head
        while current is not None:
            result.append(str(current.value))
            current = current.next
        return " → ".join(result) + " → None"


# Test it
ll = LinkedList()
ll.append("Alice")
ll.append("Bob")
ll.append("Charlie")
print(ll)

ll.prepend("Zara")
print(ll)

ll.search("Bob")
ll.search("Diana")

ll.delete("Bob")
print(ll)

ll.delete("Zara")
print(ll)
