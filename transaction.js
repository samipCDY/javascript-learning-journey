const initailbalance = 10000;
const firstdeposit = 3000;
const withdrawal = 2000;
const seconddeposit = 1500;

function createBankAccount(initialBalance) {
    console.log(`Account created with initial balance: $${initialBalance}`);
    
    let balance = initialBalance;
    function transaction(type, amount) {
        if(type === 'deposit') {
            balance = balance + amount;
            console.log(`The deposited amount is ${amount}`);
        }else if(type === 'withdrawal') {
            balance = balance - amount;
            console.log(`The withdrawn amount is ${amount}`);
        }else{
            console.log("Invalid transaction type");
        }
        console.log(`The current balance is ${balance}`);

    }
    return transaction;
}
const myAccount = createBankAccount(initailbalance);
myAccount('deposit', firstdeposit);
myAccount('withdrawal', withdrawal);
myAccount('deposit', seconddeposit);
