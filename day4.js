// Section 5: Functions
// Function parameters are the names listed in the function definition
// Function arguments are the real values passed to the function

function mul(a, b){
    return a*b;
}

var total = mul(10, 20);
console.log(total);


// Anonymous function
var some_var = function(a, b){
    return a/b;
}

console.log(some_var(10,2));


// Section 6: ECMAScript

// var vs const vs let
// var -> function scope  
// let & const -> block scope --> '{' iske chalue hone se  '}' iske khatm hone tak hi vo rhega
// const cannot change values once assigned


// template literals
var a = 10;
for(var i = 1; i <= 10; i++){
    console.log(`${a} * ${i} = ${a*i}`)
}

// default parameters
function sub(a = 0, b=0){
    return a-b;
}
console.log(`${sub(2)}`);

// Fat Arrow function
const modFunc = (a, b) => `${a%b}`;
console.log(modFunc(31, 17));


// Section 7: Arrays
var tempArr = new Array;
console.log(tempArr);

var arr = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne'];
console.log(arr[3]);
console.log(arr.length);

// For..in returns index 
for(let element in arr){
    console.log(element);
}

// For..of returns elements in arr
// for(let element of arr){
//     console.log(element);
// }

arr.forEach(function(elements, index, array){
    console.log(`${elements} - ${index}`)
});

// fat arrow here doesn't support this parameter
arr.forEach((elements, index, arr) => {
    console.log(`${index} - ${elements}`)
});


// Search and Filter in an Array
var arr = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne'];
// indexOf starts searching from forward
console.log(arr.indexOf('N'));
console.log(arr.indexOf('N', 7));
// lastIndexOf starts searching from backwards
console.log(arr.lastIndexOf('He'));
console.log(arr.lastIndexOf('He', 5));

// includes searches forward
console.log(arr.includes('Ti'));
console.log(arr.includes('H'));
console.log(arr.includes('H', 2))

// find only returns one element --> returns undefined if not found
//findIndex returns index of the returned element --> returns -1 if not found
const evenNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const findEvenNums = evenNums.find((nums, index, array) => {
    return nums % 2 == 0;
});

console.log(findEvenNums);
console.log(evenNums.find((nums) => nums > 3));

// Filters --> returns empty arr [] if not found
const someVar = evenNums.filter((num) => {
    return num%2 == 0;
});
console.log(someVar);

console.log(evenNums.filter((num) => num%2 != 0));

//sort first converts to string and then sorts
var str = ['d', 'f', 'a', 't', 'z', 'e', 'y', 'm'];
console.log(str.sort());
var nums = [1, 123, 3, 5, 33 , 44];
console.log(nums.sort());

//CRUD Operations in Arrays
const letters = ['a', 'b', 'c', 'd'];

// push returns the new length of the array, 
letters.push('e', 'f', 'g'); 

// unshift adds to the beginning of the array and returns new length of the array
letters.unshift('1', '2', '3');
console.log(letters);

// pop removes the last element and returns the element
letters.pop();
console.log(letters);

// shift removes the first element from the array and returns the element
letters.shift();
console.log(letters);

// splice adds and/or removes element from the array (startindex, deleteindex, changedvalue). Returns deleted element in an array
letters.splice(letters.length, 0, 'g'); // added to end
letters.splice(letters.indexOf('c'), 1, 'C'); // updates 
letters.splice(letters.indexOf('2'), 1); // deletes
console.log(letters);


// Map and Reduce Methods
 
// Map - Returns a new array containing the results of calling a function of every element in this array
// Returns new array without mutating the original array
// can chain other methods like filter, reduce, sort, etc

const a1 = [1, 4, 9, 16, 25];

let new_a1 = a1.map((curElem, index, arr) => {
    return curElem > 9;
})

console.log(a1);
console.log(new_a1);



let squares = [1, 4, 9, 16, 25, 36];
let sqrt = squares.map((currElem) => {
    return Math.sqrt(currElem);
}).filter((currElem) => {
    return currElem >= 5;
})
console.log(sqrt);


// Reduce - flatten an array (convert 3d/2d array to 1d array)
// executes a reducer function on each element of array, resulting in single output value 
// reducer function (accumulator, curr_value, curr_index, source_arr)

let num = [1, 2, 3, 4, 5, 6];
let tot = num.reduce((accumulator, currElem, index, arr) => {
    return accumulator += currElem
}, 7)

console.log(tot);


const arr_2d = [[1,2], [3,4], [5,6], [7,[8, 9]]];

let arr_1d = arr_2d.reduce((accum, currElem) => {
    return accum.concat(currElem);
})
console.log(arr_1d);