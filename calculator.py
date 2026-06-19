def add(a,b):return a+b
def subtract(a,b):return a-b
def multiply(a,b):return a*b
def divide(a,b):return a/b if b!=0 else "Cannot perform division by 0"

print("Simple Calculator")
a=float(input("Enter first number:"))
op=input("Enter operator(+,-,*,/):")
b=float(input("Enter second number:"))

if op=="+":print (add(a,b))
elif op=="-":print(subtract(a,b))
elif op =="*":print(multiply(a,b))
elif op=="/":print(divide(a,b))
else:print("Invalid Input")
