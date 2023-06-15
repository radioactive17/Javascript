// Section 4: Control Statements and Loops
// If-else, switch, while, do-while, for, for in, for of, conditional(ternary)


var a = 25;

if (a%2 == 0){
    console.log('Even number');
}else{
    console.log('Odd number')
}

// 5 falsy values in javascript - 0, '', undefined, null, NaN, and false

var b = 24;
console.log((b%2==0)?'Even':'Odd');


var planet = 'venus';

switch(planet){
    case 'earth':
        console.log('3rd planet of solar system');
        break;
    case 'mercury':
        console.log('1st planet of solar system');
        break;
    case 'venus':
        console.log('2nd planet of solar system');
        break;
    default:
        console.log('new planet xd');
}

var c = 10;
while(c >= 0){
    console.log(c);
    c--;
}

var d = 10;
do{
    console.log(d**2);
    d--;
}while(d >= 0);


for(var e = 10000; e > 0.1; e=e/10){
    console.log(e);
}