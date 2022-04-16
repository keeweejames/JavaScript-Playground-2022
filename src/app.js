console.log("hello")
var a = "hello"
console.log(a);

var myName = "James"
var myCourse = "JavaScript"
console.log(myName);
//alert("welcome");
var myAge = "45";
console.log(myAge);

//When adding JavaScript to hmtl, ./src/app.js needs to be pointing to path of file
/*Add comments over
multiple lines
is done with these.
*/

var myWelcome = "Welcome" //Declaring a variable "myWelcome" with the value "Welcome"
console.log(myWelcome) 
myWelcome = "You've outstayed your welcome" //Changing the variable "myWelcome"
console.log(myWelcome); //Outputting new variable "myWelcome"
var mySurname = "Beaumont"
mySurname = "BEAUMONT"
console.log(mySurname)

var messsage; //Learning Boolean function
//console.log(message);
message = null;
//console.log(message);
var myLight = false;
console.log(myLight);
myLight = true;
if (myLight){
    console.log(myLight);
}
var score1, score2, score3, score4;
var a = "Hello";
var b = 10;
var c = false;
console.log(a);

let firstName = "James"
console.log(firstName)
firstName = "Jimmy"
console.log(firstName)

// Two types of scope
// 1. Local scope
// 2. Global scope

// Two types of local scope
// 1. Block scope

//const msg = "Hello Earth"
// if(true){ //Blocks are defined by curly brackets {}
//     //const msg = "Hello World"
//     console.log(msg)
// }
// console.log(msg)
//2. Function scope
// function call () {
//     var msg = "Hello World"
//     console.log(msg)
// }
// console.log(call())
// console.log(msg)

// const msg = "Hello World"
// console.log(msg)

// if (true){
//     const msg = "Hello World"
//     console.log(msg)
// }

//Global scope

// var msg = "Hello World"
// function readMsg(){
//     console.log(msg)
// }

// console.log(readMsg())

//keyword Lexical Scope
// function outerFunction (){ 
// var msg = "Hello World" // Creates a variable called "msg" with the value "Hello World"

// function innerFunction(){ // Creates another function inside already declared function
//     console.log(msg) // Prints output variable
// }
// console.log(innerFunction()) // This created "undefined" as you can not call/invoke a variable
//                              // that has been defined exclusively within the function. It cannot be 
//                              // accessed from outside the function or within other functions.
// }
// console.log(outerFunction()) // Again "undefined" as this line is outside the function named
//                              // outerFunction.

//Data types
/*
1. Numbers
2. Boolean
3. String
4. Objects
*/
// let a = 1 // 'number' data type
// let b = "Hello" // 'string' data type (either single or double quotations)
// let c = true // 'Boolean' data type
// let d; // undefined data type

const value1 = '5';
const value2 = 9;
// let sum = value1 + value2; //Would return 59
let sum = Number(value1) + value2; //Returns 14 as value1 have been given Number(object)

console.log(sum);
let output = `The total sum of ${value1} and ${value2} is ${sum}`
console.log(output)

// let str = "James"
// console.log(str)
// let str1 = "Beaumont"
// console.log (str1)

// let fullName = str + " " + str1 //The double quotes here add a white space
// console.log(fullName)

// let newStr = `Hello to my new string! My fullnamme is ${str} ${str1}` //Backticks allow for a string that
//                                   //contains other operators such as $ calls actual values
// console.log(newStr)

let alphabet = "a"
console.log(Number(alphabet)) //Returns NaN

//Boolean only two keywords 'true' and 'false'

let x = true
console.log(x)
console.log(5 > 3)
console.log(5 < 3)
console.log(10 >= 4)
console.log(12 <= 5)
console.log (10 == 9)
console.log (10 == 10)
console.log (10 === 10)

//Array datatype

let test = ["Hello", "James", 21 ,2013] //Array defined by [square] brackets
console.log(test[2]) //Always remember count starts from "0" so, test[2] is the third value in the array
for(i=0;i<test.length; i++){ // 'for' loop starting at index "0" and conditions "i" < length of array
                             // "test" then incremented by 1 (i++)
    console.log(test[i])
}

//Object data type
var dog = {
    fur: "Black",
    whiskers: "Many",
    Paws: 4
}
console.log(dog);

/* What is a function?
Generally speaking, a function is a "subprogram" that can be called by
 code external (or internal in the case of recursion) to the function.
 Like the program itself, a function is composed of a sequence of
 statements called the function body. Values can be passed to a function,
  and the function will return a value.
  */

  function div(num1, num2) {
      return num1/num2
  }
  console.log(div(10,5))

function fourNumbers (num1, num2, num3, num4){ //Parameters are num1, num2, num3, num4
    let result = num1 + num2 + num3 + num4
return `The sum of ${num1} + ${num2} + ${num3} + ${num4} equals ${result}`
}
console.log(fourNumbers(1,2,3,4)) //Arguments are the values of the parameters, in this case 1,2,3,4