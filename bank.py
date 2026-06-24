class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self,amount):
        self.balance +=amount
        print(f"Deposited {amount}. New balance: {self.balance}")
    
    def withdraw(self,amount):
        if amount<=self.balance:
            self.balance-=amount
            print(f"Withdrew {amount}. New balance:{self.balance}")
        else:
            print(f"Insufficient funds. Balance:{self.balance}")

    def getbalance(self):
        return self.balance
    
account=BankAccount("Laura",2000)  
print(f"{account.owner}'s balance is {account.getbalance()}")

account.deposit(500)
account.withdraw(5000)
account.withdraw(2000)
account.getbalance()
    


   


            
