const employee= "Samip";
let BasicSalary = 40000;
let HouseAllowance = 8000;
let transportAllowance = 3000;
let taxdeduction = 4000;
function calculateSalary(){
    console.log(`Employee Name is ${employee}`);
    console.log(`Basic Salary is ${BasicSalary}`);
    console.log(`The house allowance is ${HouseAllowance}`);
    console.log(`The transport allowance is ${transportAllowance}`);
    let basicsalary = BasicSalary + HouseAllowance + transportAllowance;
    console.log(`The Gross salary is ${basicsalary}`);
    console.log(`The tax deduction is ${taxdeduction}`);
    let netsalary= basicsalary - taxdeduction;
    console.log(`The net salary is ${netsalary}`); 

}
calculateSalary();
