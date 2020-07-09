//function constructor

var colby = {
  name: "Colby",
  yearOfBirth: 1995,
  job: "web developer",
};

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function () {
  console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = "Norman";

var colby = new Person("Colby", 1995, "web developer");
colby.calculateAge();
console.log(colby.lastName);

var linnea = new Person("Linnea", 1993, "personal trainer");
linnea.calculateAge();
console.log(linnea.lastName);

// Object.create

var personProto = {
  calculateAge: function () {
    console.log(2020 - this.yearOfBirth);
  },
};

var colby = Object.create(personProto);
colby.name = "Colby";
colby.yearOfBirth = 1995;
colby.job = "web developer";

var linnea = Object.create(personProto, {
  name: { value: "Linnea" },
  yearOfBirth: { value: 1993 },
  job: { value: "personal trainer" },
});

// Primatives vs. Objects

var a = 23;
var b = a;
a = 41;
console.log(a);
console.log(b);

var obj1 = {
  name: "Colby",
  age: 25,
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

var age = 25;
var obj = {
  name: "Colby",
  city: "Dallas",
};

function change(a, b) {
  a = 60;
  b.city = "Austin";
}
change(age, obj);
console.log(age);
console.log(obj.city);

// Passing functions as arguments

var years = [1990, 1995, 2000, 2005, 2010];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2020 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

// functions returning functions

function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log("What subject do you teach, " + name + "?");
    };
  } else {
    return function (name) {
      console.log("Hello " + name + ", what do you do");
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");

teacherQuestion("Linnea");
designerQuestion("Colby");

interviewQuestion("teacher")("Colby and Linnea");

// IFEE

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

//console.log(score);

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

// Closures

function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function (yearOfBirth) {
    var age = 2020 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1995);
retirementGermany(1995);
retirementIceland(1995);
retirement(66)(1995);

// function interviewQuestion(job) {
//   if (job === "designer") {
//     return function (name) {
//       console.log(name + ", can you please explain what UX design is?");
//     };
//   } else if (job === "teacher") {
//     return function (name) {
//       console.log("What subject do you teach, " + name + "?");
//     };
//   } else {
//     return function (name) {
//       console.log("Hello " + name + ", what do you do");
//     };
//   }
// }

function interviewQuestion(job) {
  return function (name) {
    if (job === "designer") {
      console.log(name + ", can you please explain what UX design is?");
    } else if (job === "teacher") {
      console.log("What subject do you teach, " + name + "?");
    } else {
      console.log("Hello " + name + ", what do you do");
    }
  };
}
interviewQuestion('teacher')('Linnea');
