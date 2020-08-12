// let and const

// ES5
var name5 = "Colby Norman";
var age5 = 25;
name5 = "Linnea Petroff";

console.log(name5);

// ES6
const name6 = "Colby Norman";
let age6 = "25";
//name6 = 'Linnea Petroff';
//console.log(name6);
// error because name6 is a 'const'

//ES5
function driversLicense(passedTest) {
  if (passedTest) {
    // will be 'undefined' since we have not declared it yet
    console.log(firstName);
    var firstName = "Colby";
    var yearOfBirth = 1995;
    console.log(
      firstName +
        ", born in " +
        yearOfBirth +
        ", is now officially allowed to drive a car."
    );
  }
}

driversLicense(true);

//ES6
function driversLicense6(passedTest) {
  if (passedTest) {
    //will throw an error saying 'firstName' is not defined
    //console.log(firstName);
    let firstName = "Colby";
    const yearOfBirth = 1995;
    console.log(
      firstName +
        ", born in " +
        yearOfBirth +
        ", is now officially allowed to drive a car."
    );
  }
}

driversLicense6(true);

//let i = 23;

//for (let i = 0; i < 5; i++) {
// will log 0-4
//    console.log(i);
//}
// will log 23
//console.log(i);
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
(function () {
  var c = 3;
})();
// would throw error
console.log(c);

// STRINGS

let firstName = "colby";
let lastName = "norman";
const yearOfBirth = 1995;

function calcAge(year) {
  return 2020 - year;
}

// ES5
console.log(
  "This is " +
    firstName +
    " " +
    lastName +
    ". He was born in" +
    yearOfBirth +
    ". Today, he is " +
    calcAge(yearOfBirth) +
    " years old."
);

// ES6
console.log(
  `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(
    yearOfBirth
  )} years old.`
);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith("c"));
console.log(n.endsWith("n"));
console.log(n.includes("lby"));
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));

// Arrow Functions

const years = [1990, 1995, 2000, 2005];

//ES5
var ages5 = years.map(function (el) {
  return 2020 - el;
});
console.log(ages5);

//ES6
let ages6 = years.map((el) => 2020 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);

// Arrow Function 2

//ES5
var box5 = {
  color: "green",
  position: 1,
  clickMe: function () {
    var self = this;
    document.querySelector(".green").addEventListener("click", function () {
      var str =
        "This is box number " + self.position + " and it is " + self.color;
      alert(str);
    });
  },
};
box5.clickMe();

//ES6
var box6 = {
  color: "green",
  position: 1,
  clickMe: function () {
    document.querySelector(".green").addEventListener("click", () => {
      var str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  },
};
box6.clickMe();

function Person(name) {
  this.name = name;
}
//ES5
Person.prototype.myFriends5 = function (friends) {
  var arr = friends.map(
    function (el) {
      return this.name + " is friends with " + el;
    }.bind(this)
  );
  console.log(arr);
};
var friends = ["Bob", "Jane", "Mark"];
new Person("Colby").myFriends5(friends);

//ES6
Person.prototype.myFriends6 = function (friends) {
  var arr = friends.map((el) => `${this.name} is friends with ${el}`);
  console.log(arr);
};
new Person("Linnea").myFriends6(friends);

// Destructuring

//ES5
var colby = ["Colby", 25];
var name1 = colby[0];
var age1 = colby[1];

//ES6
const [name, age] = ["Colby", 25];
console.log(name);
console.log(age);

const obj = {
  firstName: "Colby",
  lastName: "Norman",
};

const { firstName: a, lastName: b } = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);

console.log(age2);
console.log(retirement);

//Arrays
const boxes = document.querySelectorAll(".box");

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
  cur.style.backgroundColor = "dodgerblue";
});

//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach((cur) => (cur.style.backgroundColor = "dodgerblue"));

//ES5
// for( var i = 0; i < boxesArr5.length; i++) {
//     if(boxesArr5[i].className === 'box blue') {
//         continue;
//     }
//     boxesArr5[i].textContent = 'I changed to blue!';
// }

//ES6
for (const cur of boxesArr6) {
  if (cur.className.includes("blue")) {
    continue;
  }
  cur.textContent = "I changed to blue!";
}

//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function (cur) {
  return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
const something = ages.findIndex((cur) => cur >= 18);
console.log(something);

// Spread Operator

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(1, 2, 3, 4);
console.log(sum1);

//ES5
var ages = [1, 2, 3, 4];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const family1 = ["Colby", "Linnea", "Kyle"];
console.log(family1);
const family2 = ["Hermon", "Alex", "Marsela"];
console.log(family2);

const bigFamily = [...family1, ...family2];
console.log(bigFamily);

const h = document.querySelector("h1");
const boxes1 = document.querySelectorAll(".box");
const all = [h, ...boxes1];

//Array.from(all).forEach(cur => cur.syle.color = 'purple');

//Rest Paramaters
//ES5
function isFullAge5(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1);
  argsArr.forEach(function (cur) {
    console.log(2020 - cur >= limit);
  });
}
isFullAge5(1990, 1999, 1965);

//ES6
function isFullAge6(limit, ...years) {
  years.forEach((cur) => console.log(2020 - cur >= limit));
  console.log(years);
}
isFullAge6(1990, 1999, 1965);
