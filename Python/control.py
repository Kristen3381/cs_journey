score=int(input("What is your score :"))

if score >=70:
    print("A -Excellent ")
elif score >= 60:
    print("B -Good Job")
elif score>=50:
    print("C -Keep pushing")
else:
    print("Below C-Lets Study harder")

fruits=["Mango","Oranges","Bananas"]
for fruit in fruits:
    print(f"I love {fruit}")

count=1
while count<=5:
    print(f"Count: {count}")
    count+=1


for num in range(10):
    if num==3:continue
    if num==7:break
    print(num)
