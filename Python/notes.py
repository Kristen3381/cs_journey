import json
with open("notes.txt","w") as file:
    file.write("This is my first note.\n")
    file.write("Learning file I/O today.\n")

with open("notes.txt","r") as file:
    content=file.read()
    print(content)
        
with open("notes.txt","a") as file:
    file.write("Add a new note without erasing the previous one \n")
    print (content)

contacts={
    "Laura":"010",
    "Daisy"
}