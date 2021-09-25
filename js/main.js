function calculateInvoice(starterPrice,maindishPrice,dessertPrice,beveragePrice){
    let Sum = Math.ceil(starterPrice) + Math.ceil(maindishPrice) + Math.ceil(dessertPrice) + Math.ceil(beveragePrice);
    console.log("Invoice is : " + Sum + " Euro");
    return (Sum);
}


var springRolls = Math.round(2.99);
var Beef = Math.round(8.99);
var CarrotCake = Math.round(3.99);
var Coke = Math.round(2.49);
console.log(calculateInvoice(springRolls,Beef,CarrotCake,Coke))

// Invoice 1 : Tomato Bruschetta + Grilled Salmon + Carrot Cake + Coke

calculateInvoice(1.99,7.99,3.99,2.49);

// Invoice 2 : French Onion Soup + Eggplants Lasagne + Cheese Cake + Beer 

calculateInvoice(3.49,9.99,4.50,1.49);

// Invoice 3 : Caesar Salad + Marrakesh vegetarian Curry + Mexican Sundae + Nutella Shake 

calculateInvoice(5.49,4.99,6.99,5.49);

// Invoice 4  : Spring Rolls + Marrakesh vegetarian Curry + Coconut Cream Pie + Beer
calculateInvoice(2.99,4.99,5.49,1.49);









