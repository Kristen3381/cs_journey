import random


secret=random.randint(1,10)
attempts=0

while True:
    guess=int(input("Guess a number(1-10) :"))
    attempts+=1
    if guess<secret:
     print("Too low!")
    elif guess>secret:
       print("Too High!")
    else:
       print(f"correct!You got it in {attempts} attempts")
       break


