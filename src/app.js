//create a function that takes array containing only numbers and return thr first element.
//create a function named onlynumbers

// function onlyNumbers(arr){}
//     return arr[0]
//     }
//     console.log(onlyNumbers([1, 2, 3, 4]))

//or

// const onlyNumbers = arr => arr[0];
// console.log(onlyNumbers([1, 2, 3, 4]))

//give two arguments, return an array which contains these two arguments

// function createArray(a, b) {
//     var arr = [a, b]
//     return arr
// }
// console.log(createArray(1, 2))

//write a function to reverse an array
//example: reverseArray([1, 2, 3, 4, 5]) -> [5, 4, 3, 2, 1]

// function reverseArray(arr) {
// return arr.reverse();
// }
// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8]));

//or refactored

// const reverseArray = arr => arr.reverse();
// console.log(reverseArray([1,2,3,4,5,6,77,8,8]));

//create a function that accepts an array and return the last element
//example lastElement(["James", 20, "yellow", "dog"]) -> dog

// const lastElement = arr(arr.length - 1);
// console.log(lastElement(["James", 20, "yellow", "dog"]))

//create a function that takes an array and returns it as a string
//arrayToString(["James", 20, "yellow"]) -> "James20yellow"

// const result = arrayToString(["James", 20, "yellow"])
// console.log(typeof result);

// function arrayToString(arr){
//     return arr.join('')

// }
// console.log(arrayToString(["James", 20, "yellow"]))

//create a function that takes an array and returns the data types of the array values in a new array
//arrayValueTypes(["James", 20, "blue", [], true]) -> [string, number, string, object, boolean]

// function arrayValueTypes(arr){
//     const newArray = [];
//     const map = arr.map[typeof];
// }
// console.log(map("James", 20, "blue", [], true))

// function arrayValueTypes(arr) {
//     var newArray = [];

//     for(var i = 0; i < arr.length; i++){
//         newArray[i] = typeof arr[i]
//     }
// return newArray
// }
// console.log(arrayValueTypes["James", 20, "blue", [], true]);
//or

// const arrayValueTypes = arr => arr.map(x => typeof x)

//TODO
/*
create a function that takes an array as a parameter ["1", "2", "3"] and return
the array values all in number data type
*/

// const convert = (arr) => arr.map((elem) => parseInt(elem));
// numbers = convert(["1", "2", "3"]);

// const numbers = arr => arr.map(Number);
// console.log(numbers["1", "2", "3"]);

/*create a function that takes a number from (1-12) and returns it's corresponding month
month name as a string

example: nameOfMonth(3) -> "March" */

// function nameOfMonth(num){
//     if (num == 1);
//     {console.log("January")};
//     {else if (num == 2)};
//     console.log("February");
//     {else if (num == 3)};
//     console.log("March");
//     {else if (num == 4)};
//     console.log("April");
//     {else if (num == 5)};
//     console.log("May");
//     {else if (num == 6)};
//     console.log("June");
//     {else if (num == 7)};
//     console.log("July");
//     {else if (num == 8)};
//     console.log("August");
//     {else if (num == 9)};
//     console.log("September");
//     {else if (num == 10)};
//     console.log("October");
//     {else if (num == 11)};
//     console.log("November");
//     {else if (num == 12)};
//     console.log("December");
//     // else if (num) < 1 && (num) > 12;
//     // console.log("Not a valid month!");
// }
// console.log(nameOfMonth(1));

// const birthday = new Date('February 20, 1977 07:30:00');
// const day1 = birthday.getDay(); //Sunday = 0 through to Saturday = 6
// console.log(day1);

// //write a function that given date (MM/DD/YYYY) return the day of the week as a string

function getDay(day){
    var days = ["Sunday", "Monday", "Tuesday", "Wedenesday", "Thursday", "Friday", "Saturday"];
    var date = new Date(day);

    return days[date.getDay()];
}
console.log(getDay("04/16/2022"));

//create a function that returns true if the length of a string
//is even and false if the length of the string is odd

// function isEven(string){
//     var len = string.length;
//     return (len/2 == Math.round(len/2)) 
     
// }
// console.log(isEven("home"))

//ES6
// const isEven = (string) => string.length % 2 == 0;
// console.log(isEven("asdjhaksjdh"));

//create a function takes two arguments first one is an array and the second is a string
//indexArray(["James", "Beaumont", "NMIT", "SDV"], "NMIT") -> 2

// function getIndex(array, string){
//     return array.indexOf(string)
// }
// console.log(getIndex(["a", "b", "c"], "c"));

//ES6
// const getIndex = (array, string) => array.findIndex(val => val === string);
// console.log(getIndex(["a", "b", "c"], "c"));

//create a function which returns the total of all odd numbers
//up to and including the number passed in as an parameter.
//example: totalOdd(5) -> 9 [1+3+5]

function totalOdd(num){
    let total = 0
    for (let i = 1; i <= num; i +=2) {
    total += i //total = total + 1
    }
    return total
}
console.log(totalOdd(38));

//create a function that takes an array of of strings and numbers and
//filter out the array so it returns only an array of number
//example onlyNumbers("james", 7010, "beaumont", 2022) -> [7010, 2022]

function onlyNumbers(arr){
    return arr.filter(val => Number.isInteger(val));
}
console.log(onlyNumbers(["james", 7010, "beaumont", 2022]));

//create a function takes a number as an argument, increment the number by 1 and return the result
function increment(num){
return ++num;
}
console.log(increment(12))

//create a function that takes a boolean variable and return it as a string
//example bolToStr(true) -> "true"
function bolToStr(param){
    return param.toString();
}

const test = bolToStr(false)
console.log(typeof test);

//create a function that takes two numbers, num1 and num2, and an array and returns an array
//containing all numbers greater than num1 and less than num2; 
//example greaterAndLess (2,7,[1,2,3,4,5,6,7,8,9]) -> [3,4,5,6]

// function greaterAndLess(num1,num2,arr){
// let filtered = []; //new array 'filtered' with empty value
// let n = arr.length //declaring n equalled to the length of the array 'arr'
// for(var i = 0; i < n; i ++){ 
//   if(arr[i]> num1 && arr[i] < num2){
//       filtered.push(arr[i]);
//   }
// }
// return filtered
// }
// console.log(greaterAndLess(2,9,[1,2,3,4,5,6,7,8,9]))

//ES6 refactored
function greaterAndLess(num1, num2, arr){
return arr.filter(val => val > num1 && val < num2)
}
console.log(greaterAndLess(2,9,[1,2,3,4,5,6,7,8,9]));

//create a function that calculates the area of a rectangle, if the arguments are 
//invalid return an error message
//example: recArea(-2, 5) -> "error"
// function recArea(base, height){
//     let area = (base * height)
//         if (base > 0 && height > 0);
//         else console.log("Invalid input");
//     return area;
// }
// console.log(recArea(4,1));

function rectArea(h, w){
    if(h < 0 || w < 0){
        return "error"
    }
    return h * w
}
console.log(rectArea(3,2))

//CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES 
//CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES 
//CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES 

/*example

class ClassName{
    constructor(param1, param2,.......){
        this.prop1 = param1
        this.prop2 = param2
    }
}
*/
class Person{ //Common practice to capitalise class name after keyword 'class'
    constructor(name, age){ //constructor is a method of initilising an instance of the class parameter
        this.name = name
        this.age = age
    }
}
let personOne = new Person('James', '45')
let personTwo = new Person('Peter', 50)
let personeThree = new Person('Brian', 7)
let personFour = new Person('Stewie', 2)
console.log(personOne.name)
console.log(personFour.age)

/*
var Person = function(name, age){
    this.name = name
    this.age = age
}
Person.prototype.fullInfo = function (){
    return this.name + ' ' + this.age
}
*/

class Student{
    constructor(name, ID, age){
        this.name = name
        this.ID = ID
        this.age = age
    }
}
    let StudentOne = new Student('James', 12345, 45)
    let StudentTwo = new Student('Peter', 23456, 50)
    let StudentThree = new Student('Brian', 34567, 7)
    let StudentFour = new Student('Stewie', 45678, 2)
    let StudentFive = new Student('Meg', 56789, 18)
    
// const first_year = new Student()
// //first_year.name
console.log(StudentFour.ID);
console.log(StudentFive.name);

// const x = function () { } //function
// const y = class { } //class

// Object.getPropertyOf(x)
// //f()
// Object.getPropertyOf(y)
// //f()

// // function Student(name, age) {
// //     this.name = name
// //     this.age = age
// // }

// class Student{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
// }

class Greeting {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    greet(){
        return `Hello ${this.firstName} ${this.lastName}`
    }
}
const new_person = new Greeting("James", "Beaumont")
console.log(new_person)
console.log(new_person.greet())
