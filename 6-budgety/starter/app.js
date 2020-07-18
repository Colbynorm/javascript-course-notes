var budgetController = (function () {})();

var UIController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn",
  };

  return {
    gitinput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

var controller = (function (budgetCtrl, UICtrl) {
  var DOM = UICtrl.getDOMstrings();

  var setupEventListeners = function() {
    document.querySelector(DOM.inputButton).addEventListener("click", ctrlAddItem);
    document.addEventListener("keypress", function (event) {
    //console.log(event);

    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
  };

  var ctrlAddItem = function () {
    var input = UICtrl.getInput();
    console.log(input);
  };

  return {
    init: function() {
      console.log('application has started.');
      setupEventListeners();
    }
  }

})(budgetController, UIController);

controller.init();
