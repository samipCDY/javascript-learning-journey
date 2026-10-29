let firstnumber = 45;
let secondnumber = 75;
let thirdnumber = 60;
function comparenumber(){
    console.log(`The first number is ${firstnumber}`);
    console.log(`The second number is ${secondnumber}`);
    console.log(`The third number is ${thirdnumber}`);
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
    if(firstnumber%2==0){
        console.log(`The first number is even number`);
}else{
    console.log(`The first number is odd number`);
}
if(firstnumber>40 && secondnumber>40 && thirdnumber>40){
    console.log(`All the numbers are greater than 40 : true`);
}else{
    console.log(`All the numbers are greater than 40 : false`);
}
    }
comparenumber();
