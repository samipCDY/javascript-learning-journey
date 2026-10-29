const studentName = "Samip";
let js= 85;
let HTML=90;
let CSS=75;
let python=30;
let database=80;
function calculateResult(){
    console.log(`Student Name is ${studentName}`);
    console.log(`The marks in JS is ${js}`);
    console.log(`The marks in HTML is ${HTML}`);
    console.log(`The marks in CSS is ${CSS}`);
    console.log(`The marks in Python is ${python}`);
    console.log(`The marks in Database is ${database}`);
    let totalmarks = js +HTML + CSS + python + database;
    console.log(`The total marks is ${totalmarks}/500`);
    let average = totalmarks/5;
    console.log(`The average marks is ${average}`);
    let percentage = (totalmarks/500)*100;
    console.log(`The percentage is ${percentage}%`);
    if(percentage >= 90 && percentage    <=100){
        console.log(`The student grade is A+`);
    }else if(percentage >= 80 && percentage <=89){
    console.log (`The student grade is A`);}
    else if(percentage >= 70 && percentage   <=79){
        console.log(`The student grade is B`);
    }else if(percentage >= 60 && percentage <=69){
        console.log(`The student grade is C`);
    }else{
        console.log(`The student grade is F`);
    }
    if(js >= 40 && HTML >= 40 && CSS >= 40 && python >= 40 && database >= 40){
        console.log(`The student is pass`);

    }else{
        console.log(`The student is fail`);
    }
}
calculateResult();