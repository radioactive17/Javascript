// Section 14: OOPS in JS

// object literal is simply a key-value pair data strucutre 
// storing variables and functions together in one container, refereed to as objects.

//Creating objects
// 1st way
let bioData = {
    myName: "Jignesh",
    myAge: 26,
    getprofile: function (){
        console.log(`${bioData.myName} ${bioData.myAge}`);
    }
}

console.log(bioData.myName);
bioData.getprofile();


//2nd Way
let bioData1 = {
    myName: "Jignesh",
    myAge: 26,
    getprofile (){
        console.log(`${bioData1.myName} ${bioData1.myAge}`);
    }
}

console.log(bioData1.myName);
bioData.getprofile();

// Object inside another object

let bioDat = {
    myName: {
        firstName: "Jignesh",
        lastName: "Nagda",
    },
    myAge: 26,
    getprofile: function (){
        console.log(`${bioDat.myName} ${bioDat.myAge}`);
    }
}

console.log(bioDat.myName.lastName);


// 'this' Object

// this Obect containes the current context
// Can have different values depending on where it is placed

console.log(this); // referes to current context and that is window global object
//console.log(this.alert('sdf'));

// function myHeight(){
//     console.log(this); //still points to window global object
// }
// myHeight();

var myWeight = 150;
function myData (){
    console.log(this.myWeight);
} 
myData(); //prints weight

const obj = {
    myAge: 26,
    myName() {
        console.log(this.myAge);
    }
}
obj.myName();


const obj1 = {
    myAge: 26,
    myName: () => {
        console.log(this.myAge);
    }
}
obj1.myName(); // will not print age. 

