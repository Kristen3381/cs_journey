import json
import os
from datetime import datetime

FILENAME = "tasks.json"

def load_tasks():
    if not os.path.exists(FILENAME):
        return []
    with open(FILENAME, "r") as f:
        return json.load(f)

def save_tasks(tasks):
    with open(FILENAME, "w") as f:
        json.dump(tasks, f, indent=4)

def add_task(title, priority="medium"):
    tasks = load_tasks()
    task = {
        "id": len(tasks) + 1,
        "title": title,
        "priority": priority,
        "done": False,
        "created": datetime.now().strftime("%Y-%m-%d %H:%M")
    }
    tasks.append(task)
    save_tasks(tasks)
    print(f"✅ Task added: '{title}' [{priority} priority]")

def list_tasks():
    tasks = load_tasks()
    if not tasks:
        print("No tasks yet! Add one with: add")
        return
    print("\n─── Your Tasks ───────────────────────")
    for task in tasks:
        status = "✓" if task["done"] else "○"
        print(f"[{status}] #{task['id']} | {task['title']} | {task['priority']} | {task['created']}")
    print("──────────────────────────────────────\n")

def complete_task(task_id):
    tasks = load_tasks()
    for task in tasks:
        if task["id"] == task_id:
            task["done"] = True
            save_tasks(tasks)
            print(f"✅ Task #{task_id} marked as complete!")
            return
    print(f"Task #{task_id} not found.")

def delete_task(task_id):
    tasks = load_tasks()
    original_length = len(tasks)
    tasks = [t for t in tasks if t["id"] != task_id]
    if len(tasks) < original_length:
        save_tasks(tasks)
        print(f"🗑️  Task #{task_id} deleted.")
    else:
        print(f"Task #{task_id} not found.")

def show_menu():
    print("\n═══════════════════════════════")
    print("     CLI TASK MANAGER")
    print("═══════════════════════════════")
    print("1. Add task")
    print("2. List tasks")
    print("3. Complete a task")
    print("4. Delete a task")
    print("5. Quit")
    print("═══════════════════════════════")

def main():
    print("Welcome to your Task Manager!")
    while True:
        show_menu()
        choice = input("Choose an option (1-5): ").strip()

        if choice == "1":
            title = input("Task title: ").strip()
            priority = input("Priority (high/medium/low): ").strip().lower()
            if priority not in ["high", "medium", "low"]:
                priority = "medium"
            add_task(title, priority)

        elif choice == "2":
            list_tasks()

        elif choice == "3":
            list_tasks()
            try:
                task_id = int(input("Enter task number to complete: "))
                complete_task(task_id)
            except ValueError:
                print("Please enter a valid number.")

        elif choice == "4":
            list_tasks()
            try:
                task_id = int(input("Enter task number to delete: "))
                delete_task(task_id)
            except ValueError:
                print("Please enter a valid number.")

        elif choice == "5":
            print("Goodbye! Keep being productive 💪")
            break

        else:
            print("Invalid option — choose 1 to 5.")

main()
