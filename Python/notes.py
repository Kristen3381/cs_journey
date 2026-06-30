import json
#write to a text file
with open("notes.txt","w") as file:
    file.write("This is my first note.\n")
    file.write("Learning file I/O today.\n")
#read a text file
with open("notes.txt","r") as file:
    content=file.read()
    
 #open a text file       
with open("notes.txt","a") as file:
    file.write("Add a new note without erasing the previous one \n")
    print (content)
#Write contacts as a library to make use of the json import
contacts={
    "Laura":"010",
    "Daisy":"012"
}

with open ("contacts.json","w") as file:
    json.dump(contacts,file,indent=4)

with open("contacts.json","r") as file:
    loaded_contacts=json.load(file)
    print(loaded_contacts)
#Error handling to catch the error without crashing
try:
    with open("does_not_exist.json","r") as file:
        loaded_contacts=json.load(file)
       
except FileNotFoundError:
    print("File not found -starting with an empty contact list.")
    loaded_contacts={}

print(f"Loaded_contacts:{loaded_contacts}")