let firstnumber = 45;
let secondnumber = 75;
let thirdnumber = 60;
function comparenumber(){
    if(firstnumber > secondnumber && firstnumber > thirdnumber){
        console.log(`The first number ${firstnumber} is the largest number`);
    }else if(secondnumber > firstnumber && secondnumber > thirdnumber){
        console.log(`The second number ${secondnumber} is the largest number`);
    }else{
        console.log(`The third number ${thirdnumber} is the largest number`);
    }
    if(firstnumber < secondnumber && firstnumber < thirdnumber){
        console.log(`The first number ${firstnumber} is the smallest number`);
    }else if(secondnumber < firstnumber && secondnumber < thirdnumber){
        console.log(`The second number ${secondnumber} is the smallest number`);
    }else{
        console.log(`The third number ${thirdnumber} is the smallest number`);
    }
    }
comparenumber();
