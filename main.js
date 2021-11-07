//                             Basic of JavaScript

//--------------------------- ( * , / , + , -) ----------------------


let a = 2;
let b = 3;
let result = a + b;
console.log(result);

let a = 4, b = 2;
console.log(a + b);


let a = 4, b = 5;
console.log(a * b);  // short way 

let a = 4, b = 2;
console.log(a / b);


// -------------------------- ( Fuctions ) --------------------

function HalloWorld() {
    console.log('Hallo World')
}
HalloWorld();

function Sub(a, b) {
    console.log(a - b);
}
Sub(3, 2)

function Sub(a = 3, b = 2) {
    return a - b;
}
console.log(Sub())  // Model one

let mult = function (a, b) {
    console.log(a * b);
}
mult(4, 5) // Model two

let Div = (a, b) =>  console.log(a / b)

Div(10, 2) // Model Three


// ------------------------------- ( Conditions ) ---------------------------

//  different between  ||(or) and &&(and) 

// ||  true + true = true 
// ||  true + fulse = true 
// ||  fulse + true = true 
// ||  fulse + fulse = fulse 

// &&  true + true = true
// &&  true + fulse = Fulse
// &&  fulse + true = Fulse
// &&  fulse + fulse = Fulse

// Example

let a = 'ahmed';
let b = 'ali'
if (a == 'ahmed' || b == 'maxamed') { 
    console.log('True')
}    // true + false = true,  this is ||(or)


let a = 'ahmed';
let b = 'ali'
if (a == 'ahmed' && b == 'maxamed') {  
    console.log('True')
}  // true + false = false,  this is ||(and)




let Name = 'Ahmed ';
Name = 'Aisha'

if (Name == "Ahmed", 'Aisha') {
    console.log('Hi ' + Name);
} else {
    console.log('Hallo');
}


// // Exercise FizBaz in Conditions

let checkNumber = 15;
if (checkNumber % 3 == 0 && checkNumber % 5 == 0) {
    console.log('This Number is FizBaz')
} else if (checkNumber % 5 == 0) {
    console.log('This Number is Baz')
} else if (checkNumber % 3 == 0) {
    console.log('This Number is Fiz')
}


let checkNumber = 15;
if (checkNumber % 15 == 0) {
    console.log('This Number is FizBaz')
} else if (checkNumber % 5 == 0) {
    console.log('This Number is Baz')
} else if (checkNumber % 3 == 0) {
    console.log('This Number is Fiz')
} // short


let checkNumber = (x) => {
    if (x % 15 == 0) {
        console.log('This Number is FizBaz')
    } else if (x % 5 == 0) {
        console.log('This Number is Baz')
    } else if (x % 3 == 0) {
        console.log('This Number is Fiz')
    }
}// Fuction and shortest
checkNumber(5)


//---------------------------(  Arrays   and   Loops  )-------------------------------

//---------------- Arrays---------------

let studenName = ['Ahmed', 'Ali',]
console.log(studenName); // show all value
console.log(studenName[0]) // position in one value  Result is:  (Ahmed)


studenName[2] = 'Osman'; // it add another value  
console.log(studenName.length); //  Result is:  3
console.log(studenName[2]);  //  Result is:  (Osman)


// -----------------Loops-------------------

// some loops:  while , Do..while , for , for..of


                // While loop


let num = 1;

while (num <= 5) {
    console.log(num);
    num += 1;
}  // Its 1,2,3,4,5


let num = 5;

while (num > 0) {
    console.log(num);
    num -= 1;
}  // Its 5,4,3,2,1 inverse


let names = ['Ali', 'Mariya', 'Sheekhaal']

let counter = 0;
while (counter < names.length) {
    let items = names[counter];
    console.log(items);
    counter += 1;
}  // calling array by using while loop first - last.   Result is:    Ali , Mariya , Sheekhaal


let counter = names.length - 1;
while (counter >= 0) {
    let items = names[counter];
    console.log(items);
    counter -= 1;
}  // calling array by using while loop last - first.   Result is:    Ali , Mariya , Sheekhaal



                // for loop

for (let num = 1; num <= 5; num += 1) {
    console.log(num);
}  // Its 1,2,3,4,5


for (let num = 5; num > 0; num -= 1) {
    console.log(num);
}  // Its 5,4,3,2,1 inverse


let names = ['Ali', 'Mariya', 'Sheekhaal']

for (let counter = 0; counter < names.length; counter += 1) {
    let items = names[counter];
    console.log(items);
}  // calling array by using for loop first - last .  Result is :   Ali , Mariya , Sheekhaal


for (let counter = names.length - 1; counter >= 0; counter -= 1) {
    let items = names[counter];
    console.log(items)
}   // calling array by using for loop last - first .  Result is :   Sheekhaal , Mariya , Ali


                // Do..While loop


let num = 1;

do {
    console.log(num);
    num += 1;
} while (num <= 5)  // Its 1,2,3,4,5


let num = 5;

do {
    console.log(num);
    num -= 1;
} while (num > 0) // Its 5,4,3,2,1 inverse


let names = ['Ali', 'Mariya', 'Sheekhaal']

let counter = 0;
do {
    let items = names[counter];
    console.log(items);
    counter += 1;
} while (counter < names.length)  // calling array by using Do..while loop first - last.  Resolt is:  Ali , Mariya , Sheekhaal


let counter = names.length - 1;
Do{
    let items = names[counter];
    console.log(items);
    counter -= 1;
} while (counter >= 0) // calling array by using Do..while loop last - first.  Result is:   Ali , Mariya , Sheekhaal


                // for..of loop

let names = ['Ali', 'Mariya', 'Sheekhaal']
for (let studentname of names) {
    console.log(studentname);
} // calling array by using Do..while loop first - last.  Result is:   Ali , Mariya , Sheekhaal

            //Exercise of loop ( Factorial )


let num = 5;
let counter = 1;
while (num > 0) {
    counter *= num;
    num -= 1;
}
console.log(counter) // Result is: 120

let checkNumber = (num) => {
    let counter = 1;
    while (num > 0) {
        counter *= num;
        num -= 1;
    }
    console.log(counter)
}
checkNumber(3) // Result is 6  using Functon



//---------------------------( Object and objec with function  )-------------------------------

             // Object {key: value}  

let person = {
    name: 'Ahmed',
    Living: 'Hargesisa',
    Hopies: 'Coding',
}
console.log(person.Living, person.name ) // Calling key's that iner object. Result is: Hargesis Ahmed





