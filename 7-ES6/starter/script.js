// let and const

// ES5
var name5 = 'Colby Norman';
var age5 = 25;
name5 = 'Linnea Petroff';

console.log(name5);

// ES6
const name6 = 'Colby Norman';
let age6 = '25';
name6 = 'Linnea Petroff';
console.log(name6);
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
        console.log(firstName);
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
