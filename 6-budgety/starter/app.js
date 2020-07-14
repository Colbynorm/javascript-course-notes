var budgetController = (function() {
    


})();


var UIController = (function() {



})();


var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        console.log('It Works!');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)



    document.addEventListener('keypress', function(event) {
        console.log(event);

        if (event.keyCode === 13) {
            console.log('ENTER was pressed');

            ctrlAddItem();
        }
    });

})(budgetController, UIController);


