contacts={}
def add_contact(name,phone):
    contacts[name]=phone
    print(f"Contact `{name} added!")

def find_contact(name):
    return contacts.get(name,"Contact not found...")
