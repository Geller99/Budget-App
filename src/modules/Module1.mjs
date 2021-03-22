

/* using an IIFE cause of private scope and returning an object

*/
const budgetController = (function() {

    let x = 23;
    const add = function(a) {
        return x + a;
    }

    return  {
        publicTest: function (b) {
            return (add(b))
        } 
    }

})();



const UIController = (function () {


})();


const controller = (function (budgetCtrl, UICtrl) {
        let z = budgetCtrl.publicTest(5);

        return  {
            anotherPublic: function(){
                return z
            }
        }
})(budgetController, UIController)

console.log(controller.anotherPublic())


