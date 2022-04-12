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

function arrayValueTypes(arr) {
    var newArray = [];

    for(var i = 0; i < arr.length; i++){
        newArray[i] = typeof arr[i]
    }
return newArray
}
console.log(arrayValueTypes["James", 20, "blue", [], true]);
//or

// const arrayValueTypes = arr => arr.map(x => typeof x)