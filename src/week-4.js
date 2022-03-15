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