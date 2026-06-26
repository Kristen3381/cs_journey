student={
    "name":"Laura",
    "age":21,
    "gpa":65

}
print(student["name"])
print(student.get("age","N/A"))
student["gpa"]=71
student["University"]="MMUST"
del student["age"]
for key,value in student.items():
    print(f"{key}:{value}")

if "name" in student:
    print("Bla bla bla")