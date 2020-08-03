// let and const

// ES5
var name5 = 'Colby Norman';
var age5 = 25;
name5 = 'Linnea Petroff';

console.log(name5);

// ES6
const name6 = 'Colby Norman';
let age6 = '25';
//name6 = 'Linnea Petroff';
//console.log(name6);
// error because name6 is a 'const'


//ES5
function driversLicense(passedTest) {
    if(passedTest) {
        // will be 'undefined' since we have not declared it yet
        console.log(firstName);
        var firstName = 'Colby';
        var yearOfBirth = 1995;
        console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
    }
}

driversLicense(true);

//ES6
function driversLicense6(passedTest) {
    if(passedTest) {
        //will throw an error saying 'firstName' is not defined
        //console.log(firstName);
        let firstName = 'Colby';
        const yearOfBirth = 1995;
        console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
    }
}

driversLicense6(true);


let i = 23;

for (let i = 0; i < 5; i++) {
    // will log 0-4
    console.log(i);
}
// will log 23
console.log(i);
// let was changed to var... the consoleLog above would be 5 instead of 23






// Blocks and IIFEs
//ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}
// would throw error, console.log needs to be in the same block as the variables.
//console.log( a + b );
// consoles 3
console.log(c);


//ES5
(function() {
    var c = 3;
})();
// would throw error
console.log(c);







// STRINGS

let firstName = 'colby';
let lastName = 'norman';
const yearOfBirth = 1995;

function calcAge(year) {
    return 2020 - year;
}


// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in'  + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('c'));
console.log(n.endsWith('n'));
console.log(n.includes('lby'));
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));








// Arrow Functions

const years = [1990, 1995, 2000, 2005];

//ES5
var ages5 = years.map(function(el) {
    return 2020- el;
});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2020 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);