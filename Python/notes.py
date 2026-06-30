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
    "Daisy":"012"
}

with open ("contacts.json","w") as file:
    json.dump(contacts,file,indent=4)

with open("contacts.json","r") as file:
    loaded_contacts=json.load(file)
    print(loaded_contacts)

try:
    with open("does not exist json","r") as file:
        loaded_contacts=json.load(file)
       
except FileNotFoundError:
    print("File not found -starting with an empty contact list.")
    loaded_contacts={}

print(loaded_contacts)