// Section 8: Strings
let myName = 'Jignesh Nagda';
let myFullName = 'Jignesh Kirti Nagda';
let some_var = new String('Hello World');

console.log(myName, myFullName, some_var);
console.log(myFullName.length);


// Escape character: 
// \' -> '
// \" -> "
// \\ -> \

let s1 = 'Hi my name is "Jignesh Nagda"';
let s2 = "Hi my name is 'Jignesh Kirti Nagda' ";
let s3 = "Hi my name is \'JKN\'";


// Finding a string within a string
const temp_s = "This sentence is just for testing purpose";
console.log(temp_s.indexOf("sentence", 5)); // forward search from index i
console.log(temp_s.lastIndexOf("sentence", 4)); // backward search from index i 

// Searching a string within a string
console.log(temp_s.search('testing')); // search cannot take index argument like indexOf/lastIndexOf

// Extracting string parts - 3 methods: slice(start, end), substring(start, end), substr(start, length)

// slice returns extracted part in new string
var veggies = 'Okra, Cauliflower, Eggplant, Potato';
let sliced_veggies1 = veggies.slice(0, 6); // 0 to 5 
let sliced_veggies2 = veggies.slice(9, -2);  
console.log(sliced_veggies1);
console.log(sliced_veggies2);

// substring similar to slice but doesn't accept negative index
let substring_veggies1 = veggies.substring(0, 6); // 0 to 5
let substring_veggies2 = veggies.substring(9, -2); // till 8th index
console.log(substring_veggies1);
console.log(substring_veggies2);

// substr similar to slice but lenght defines the length of extracted part
let substr_veggies1 = veggies.substr(6, 5);
let substr_veggies2 = veggies.substr(6, -2); // no output
let substr_veggies3 = veggies.substr(-10); 
console.log(substr_veggies1);
console.log(substr_veggies2);
console.log(substr_veggies3);


// Replacing String content - replace returns a new string, replaces only first match, is case sensitive
var mist_s = 'There is some mitsake in this sentence mitsake';
var correct_s = mist_s.replace('mitsake', 'mistake');
console.log(correct_s);


// Extracting String Characters - 3 methods: charAt(position), charCodeAt(position), Property access []

// charAt returns character at specified index
var lap = 'Asus Swift 3';
console.log(lap.charAt(5));

// charCodeAt returns unicode of character at specified index. Returns a UTF-16 code i.e., an integer between 0 and 65535
console.log(lap.charCodeAt(5));

// Property access 
console.log(lap[0]);



// Other Methods
var company = 'jp mORgan';
console.log(company.toUpperCase());
console.log(company.toLowerCase());

var company2 = 'Chase';
console.log(company.concat(" ", company2));

// trim removes space from the start and end of the string 
var gar_s = '               yohohohohoho            ';
var gs = 'yohohohoho           yohohohohoh';
console.log(gar_s.trim()); 
console.log(gs.trim());


// converting string to array - use split() method
var letters = 'a,b,c,d,e,f,g';
console.log(letters.split(",")); // can split on commas(,), space( ) and pipe(|)