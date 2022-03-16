//TODO
/*
JavaScript Variables
*/
var fullName = "James Beaumont"
var classCode = 503

console.log(fullName)
console.log(classCode)

// JavaScript Objects (A collection of data values)
var full_name =
{
first_name:/*property name*/ "James" /*property value*/,
last_name: "Beaumont",
course_number: 503
}

console.log(full_name) /*Prints out entire object named full_name*/
console.log(full_name.first_name) /*dot notation, this line prints just the first_name*/
console.log(full_name["last_name"]) /*bracket notation, requires more styling, stick to dot notation*/

//JavaScript Functions
function addTwoNumbers(num1, num2) {
    return num1+num2
}
console.log(addTwoNumbers(12,3))

function addThreeNumbers(num1, num2, num3){
    return num1+num2+num3
}

console.log(addThreeNumbers(123,32,-122.5))

//JavaScript Loops
for(var i=0; i< 10; i++){
    console.log(i)
}

//JavaScript if statements
var number = 10
if (number === 10){
    console.log("Answer = " + number)
} else {
    console.log("Error")
} 

// const and let
const num = 3 //const does not allow variables to be changed, it is fixed
console.log(num)

let numb = 4 //Allows variables to be changed
console.log(numb)

//JavaScript comments
var sdv503 = "javascript"
var x = 3
var fullName = "James Beaumont"

function sum(x1, x2){
    return x1 + x2
}
console.log(sum(123, 321))

// (=) vs (===)

//Statements vs expressions
// var numbers

//Statement
// var x
// if (y >= 0){
//     x = y
// } else {
//     x = -y
// }
// function statements(x,y) {
//     if (y >= 0 {
//         return x = y
//     } else {
//         return x = -y
//     }
//     }
// }

//Expression
// var x = y >= 0 ? y : -y

var word = "qwerty"
console.log(word.length)

var obj = {}
//console.log(obj)
obj.foo = 123
console.log(obj)
console.log(word.toUpperCase())
console.log(word.toLowerCase())

//JavaScript values (primitives vs objects)

var obj1 = {}
var obj2 = {}

console.log(obj1 === obj2) //Returns 'false' flag because they are different property names
console.log(obj1 === obj1) //Returns 'true' flag because they have the same property name
    
var number_one = 123
var number_two = 123

console.log(number_one === number_two) //Returns 'true' flag because JS looks at the value

// Boolean: true and false
// Numbers: 13234, 232.8
// Strings: 'asdf', "asdf" Javascript now accepts single and double quotations as the same
// Non-values: null and undefined

var str = "beaumont"
console.log(str.length) //Displays length of var named 'str' in this case '8'
console.log(str.length = 2) 

var numbers = [6, 7, 8, 9, 10]
console.log(numbers)
console.log(numbers[3]) //Base number is '0' therefore this example is 4th number (9)
console.log(numbers[3] = 12) //Changing the 4th number to '10'
console.log(numbers)

console.log({} === {}) /*Returns 'false' flag because objects without 
                        values are stored in different memory addresses*/

//Non values
var nonvalue
console.log(nonvalue) //Returns 'undefined' flag as no value has been assigned to 'nonvalue'

// function nonvalue (x) {
//     return x
// }

// console.log(nonvalue())
var value = {}
console.log(typeof value)
// if (!value)