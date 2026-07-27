from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()

    def enqueue(self, item):
        self.items.append(item)
        print(f"Joined queue: {item}")

    def dequeue(self):
        if self.is_empty():
            print("Queue is empty - nobody to serve.")
            return None
        item = self.items.popleft()
        print(f"Serving: {item}")
        return item

    def peek(self):
        if self.is_empty():
            return None
        return self.items[0]

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)

    def __str__(self):
        return f"Queue: {list(self.items)} (front is on the left)"


# Test it
queue = Queue()
queue.enqueue("Alice")
queue.enqueue("Bob")
queue.enqueue("Charlie")
print(queue)
print(f"Next to be served: {queue.peek()}")
queue.dequeue()
queue.dequeue()
print(queue)
queue.dequeue()
queue.dequeue()


# Print queue simulation
print("\n--- Print Queue Simulation ---")
print_queue = Queue()
print_queue.enqueue("Document1.pdf")
print_queue.enqueue("Photo.png")
print_queue.enqueue("Report.docx")

print(f"\nQueue has {print_queue.size()} jobs waiting")
print(f"Currently printing: {print_queue.peek()}\n")

while not print_queue.is_empty():
    job = print_queue.dequeue()
    print(f"Printed: {job} ✓")

print("All print jobs done!")
