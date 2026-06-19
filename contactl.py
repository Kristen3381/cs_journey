contacts={}
#adding a contact
def add_contact(name,phone):
    contacts[name]=phone
    print(f"Contact `{name} added!")
#finding a contact
def find_contact(name):
    return contacts.get(name,"Contact not found...")
def list_contact():
    if not contacts:
        print("No Contacts yet")
    for name,phone in contacts.items():
        print(f"{name}:{phone}")
#deleting a contact
def del_contact(name):
    if name in contacts:
        del contacts[name]
        print(f"{name} deleted")
    else:
        print("Contact not found")

add_contact("Laura","0106639838")
add_contact("Shavia","0795901578")
add_contact("Brian","12345567897")
#list_contact()
print(find_contact("Shavia"))
del_contact("Brian")
list_contact()
#tuples for data that is constant
#Tuples are faster than lists
coordinates=(1.4345,23.23443)
rgb_red=(255,0,0)
lat,long=coordinates
print(f"Latitude:{lat},Longitude:{long}")



