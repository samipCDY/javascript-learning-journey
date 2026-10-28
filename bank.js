const accountholder= "Toka";
let balance = 5000;
function depositmoney(){
    console.log(`acoountholder ${accountholder}`);
    console.log(`My blance is ${balance}`);
    {
    let deposit = 2000;

    console.log(`i have deposited ${deposit} in my account`);
    balance = balance + deposit;}
console.log(`My balance is ${balance}`);
    console.log(`the Updated balance is ${balance}`);
}
depositmoney();
console.log(`The final balaance is ${balance}`);