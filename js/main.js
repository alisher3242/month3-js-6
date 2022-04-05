// 1-misol

// let n = prompt("Raqam kiriting:");

// for(let i=2; i<=10; i++ ){
//     console.log(i*n);
// };

//2-misol

let num1 = prompt("Birinchi sonni kiriting:");
num1 = Number(num1)
let operator = prompt("Amalni kiritng:");
let num2 = prompt("Ikkinchi sonni kiriting:");
num2 = Number(num2)

if ( isNaN(num1) || isNaN(num2) ) {
    console.log("Raqam kiritng!!!");
}else{
    if (operator == "+") {
        console.log("Natijangiz: " + (num1+num2) );
    }else if (operator == "-") {
        console.log("Natijangiz: " + (num1-num2));
    }else if(operator == "*") {
        console.log("Natijangiz: " + (num1*num2));
    }else if(operator == "/") {
        console.log("Natijangiz: " + (num1/num2));
    }else {
        console.log("Tog'ri amal kiriting!!!");
    }
}
