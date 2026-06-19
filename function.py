def greet(name,greeting="Hello"):
    return f"{greeting},{name}!"

print(greet("Laura"))
print(greet("Henny","Bonjour"))

def is_even(n):
    return n%2==0

numbers=[1,2,3,4,5,6,7,8,9,10]
#evens=[]
#for n in numbers:
    #if is_even(n):
        #evens.append(n)
evens=[n for n in numbers if is_even(n)]
print(evens)
