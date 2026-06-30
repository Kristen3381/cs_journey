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
        
        print(f"{self.owner}'s balance is {self.balance}")
        return self.balance
    
    def __str__(self):
        return f"BankAccount(owner='{self.owner}',balance={self.balance})"
    
account=BankAccount("Laura",2000)  
print(f"{account.owner}'s balance is {account.getbalance()}")

account.deposit(500)
account.withdraw(5000)
account.withdraw(2000)
account.getbalance()

account2=BankAccount("Daisy",10000)
print(f"{account2.owner}'s balance is {account2.getbalance()}")

account2.deposit(200)
account2.withdraw(15000)
account2.withdraw(3000)
account2.getbalance()    

class SavingsAccount(BankAccount):
    def __init__(self, owner, balance=0, interest_rate=0.05):
        super().__init__(owner,balance)
        self.interest_rate=interest_rate
    
    def add_interest(self):
        interest=self.balance*self.interest_rate
        self.balance+=interest
        print(f"Interest added.New balance:{self.balance}")

    
savings = SavingsAccount("Laura", 5000, 0.10)
print(f"{account.owner}'s balance is {savings.getbalance()}")
savings.deposit(1000)
savings.withdraw(500)
savings.getbalance()
savings.add_interest()
print (savings.getbalance()) 
print(account)
print(account2)


            
