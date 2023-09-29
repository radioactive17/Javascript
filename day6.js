// Section 9: Date & Time

// Date - since 1 Jan 1970, Date takes 7 arguments
// 4 ways to create Date object

let currDate = new Date()
console.log(currDate);

console.log(new Date().toLocaleString());
console.log(new Date().toString());

console.log(Date.now());

// Here Jan is 0 and Dec is 11 (like array)n
// year, month, day, hour, min, sec, millisec
var d = new Date(1997, 8, 13, 12, 34, 123);
console.log(d.toLocaleString());

// if passing parameters, you need to pass atleast 2 args i.e., year & month

var new_date = new Date("23 September 2021 14:23:20");
console.log(new_date.toLocaleString());

var date_using_millisec = new Date(1796006473415);
console.log(date_using_millisec.toLocaleString()); 

var date = new Date();
console.log(date.toLocaleString());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());


console.log(date.setFullYear(2003));
console.log(date.setFullYear(2014, 3, 18));
console.log(date.setMonth(3));
console.log(date.setDate(10));
console.log(date.toLocaleString());



var time = new Date();
console.log(time.getTime());
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getMilliseconds());


// console.log(time.setTime());
console.log(time.setHours(18));
console.log(time.setMinutes(34));
console.log(time.setSeconds(11));
console.log(time.setMilliseconds(88));


console.log( new Date().toLocaleString());
console.log(new Date().toLocaleDateString());

console.log(new Date().toLocaleTimeString());