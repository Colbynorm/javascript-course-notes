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



// Bind, Call and Apply

var colby = {
  name: 'Colby',
  age: 25,
  job: 'junior developer',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', ladies and gentlemen! I am ', this.name + '. I am a ', this.job + '. and I am ', this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ',  this.job + ' and I\'m ',  this.age + ' years old. Have a nice ' + timeOfDay);
    }
  }
}

var linnea = {
  name: 'Linnea',
  age: 27,
  job: 'personal trainer'
};

colby.presentation('formal', 'morning');
// call method allows me to change from colby to linnea
colby.presentation.call(linnea, 'friendly', 'afternoon');

colby.presentation.apply(linnea, ['friendly', 'night time'])

var colbyFriendly = colby.presentation.bind(colby, 'friendly')
colbyFriendly('morning');
colbyFriendly('night time');

var linneaFormal = colby.presentation.bind(linnea, 'formal');
linneaFormal('afternoon');








// Coding Challenge

(function() {
  function Question(question, answers, correct) {
      this.question = question;
      this.answers = answers;
      this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
      console.log(this.question);

      for (var i = 0; i < this.answers.length; i++) {
          console.log(i + ': ' + this.answers[i]);
      }
  }

  Question.prototype.checkAnswer = function(ans) {
      if (ans === this.correct) {
          console.log('Correct answer!');

      } else {
          console.log('Wrong answer. Try again :)')
      }
  }

  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                        ['Yes', 'No'],
                        0);

  var q2 = new Question('What is the name of this course\'s teacher?',
                        ['John', 'Micheal', 'Jonas'],
                        2);

  var q3 = new Question('What does best describe coding?',
                        ['Boring', 'Hard', 'Fun', 'Tediuos'],
                        2);

  var questions = [q1, q2, q3];

  var n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();

  var answer = parseInt(prompt('Please select the correct answer.'));

  questions[n].checkAnswer(answer);
})();




/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/



(function() {
  function Question(question, answers, correct) {
      this.question = question;
      this.answers = answers;
      this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
      console.log(this.question);

      for (var i = 0; i < this.answers.length; i++) {
          console.log(i + ': ' + this.answers[i]);
      }
  }

  Question.prototype.checkAnswer = function(ans, callback) {
      var sc;
      
      if (ans === this.correct) {
          console.log('Correct answer!');
          sc = callback(true);
      } else {
          console.log('Wrong answer. Try again :)');
          sc = callback(false);
      }
      
      this.displayScore(sc);
  }

  Question.prototype.displayScore = function(score) {
      console.log('Your current score is: ' + score);
      console.log('------------------------------');
  }
  
  
  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                        ['Yes', 'No'],
                        0);

  var q2 = new Question('What is the name of this course\'s teacher?',
                        ['John', 'Micheal', 'Jonas'],
                        2);

  var q3 = new Question('What does best describe coding?',
                        ['Boring', 'Hard', 'Fun', 'Tediuos'],
                        2);
  
  var questions = [q1, q2, q3];
  
  function score() {
      var sc = 0;
      return function(correct) {
          if (correct) {
              sc++;
          }
          return sc;
      }
  }
  var keepScore = score();
  
  
  function nextQuestion() {

      var n = Math.floor(Math.random() * questions.length);
      questions[n].displayQuestion();

      var answer = prompt('Please select the correct answer.');

      if(answer !== 'exit') {
          questions[n].checkAnswer(parseInt(answer), keepScore);
          
          nextQuestion();
      }
  }
  
  nextQuestion();
  
})();