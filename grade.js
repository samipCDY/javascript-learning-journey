const studentname = "Samip";
let JS = 85;
let HTML = 90;
let CSS = 75;
let Python = 80;
let Database = 70;

let total = JS + HTML + CSS + Python + Database;
let avverage =total /5;
let percentage = (total/500)*100;
function showresult(){
    console.log(`My name is ${studentname}`);
    console.log(`My marks in JS is ${JS}`);
    console.log(`My marks in HTML is ${HTML}`);
    console.log(`My marks in CSS is ${CSS}`);
    console.log(`My marks in Python is ${Python}`);
    console.log(`My marks in Database is ${Database}`);
    console.log(`The total marks is ${total}`);
    console.log(`The average marks is ${avverage}`);
    console.log(`The percentage is ${percentage}%`);

}
showresult();
