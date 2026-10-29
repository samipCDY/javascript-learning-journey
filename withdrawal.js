const AccountHolder = "Samip";
let balance = 10000;
let withdrawalAmount = 3500;
function withdrawmoney(){
    console.log(`Account Holder Name is ${AccountHolder}`);
    console.log(`Current Balance is ${balance}`);
    console.log(`The withdrawal amount is ${withdrawalAmount}`);
    balance = balance - withdrawalAmount;
    console.log(`updated balance ${balance}`);
}
withdrawmoney();
 console.log(`The final balance is ${balance}`);