// Section 3: Expressions and Operators
// Six types of operators: Assignment, Arithmetic, Comparison, Logical, String, Conditional(ternary) 

var x = 10;
var new_x = x++;
console.log(x);
console.log(new_x);

var y = 10;
var new_y = ++y;
console.log(y);
console.log(new_y);

// Logical Operators - &&(and), ||(or), !(not)
// String Operators - +(concatenation)
// === checks datatype and value


//swaping numbers
var a = 10;
var b = 5;

var c = b;
b = a;
a = c;

console.log(a, b)

//swappig numbers using 2 var
var x = 5;
var y = 10;
x = x+y;
y = x-y;
x = x-y;
console.log(x, y)