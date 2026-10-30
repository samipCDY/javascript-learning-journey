const employename = "Samip";
let salary = 40000;
let rate = 10;
function calculateBonus(salary,rate){ 
    console.log(`The employee name is ${employename}`);
    console.log(`The salary is ${salary}`);
    let bonus = salary*rate/100;
    console.log(`The bonus is ${bonus}`);
    
    return bonus;
}
calculateBonus(salary,rate);
const result = calculateBonus(salary,rate);
console.log(`The total salary is ${salary + result}`);