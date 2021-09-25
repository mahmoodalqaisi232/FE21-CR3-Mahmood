
// Function to calculate the Invoice with 4 Parameters
function calculateInvoice(starterPrice,maindishPrice,dessertPrice,beveragePrice){
    let Sum = Math.ceil(starterPrice) + Math.ceil(maindishPrice) + Math.ceil(dessertPrice) + Math.ceil(beveragePrice);
    console.log("Invoice is : " + Sum + " Euro");
    return (Sum);
}

// Passing 4 Variables as Arguments to the Function

var springRolls = Math.round(2.99);
var Beef = Math.round(8.99);
var CarrotCake = Math.round(3.99);
var Coke = Math.round(2.49);
console.log("The Invoice is : " + calculateInvoice(springRolls,Beef,CarrotCake,Coke))


// Different Invoices (using one dish of each category)
// Invoice 1 : Tomato Bruschetta + Grilled Salmon + Carrot Cake + Coke

calculateInvoice(1.99,7.99,3.99,2.49);

// Invoice 2 : French Onion Soup + Eggplants Lasagne + Cheese Cake + Beer 

calculateInvoice(3.49,9.99,4.50,1.49);

// Invoice 3 : Caesar Salad + Marrakesh vegetarian Curry + Mexican Sundae + Nutella Shake 

calculateInvoice(5.49,4.99,6.99,5.49);

// Invoice 4  : Spring Rolls + Marrakesh vegetarian Curry + Coconut Cream Pie + Beer
calculateInvoice(2.99,4.99,5.49,1.49);



// StudentInvoice


function studentInvoice(starterPrice,maindishPrice,dessertPrice,beveragePrice){
    let NotStudnet = Math.round(starterPrice) + Math.round(maindishPrice) + Math.floor(dessertPrice)
     + Math.round(beveragePrice);
    let Discount = ((Math.round(starterPrice) + Math.round(maindishPrice) + Math.floor(dessertPrice)) * 10) / 100;
    let Student = NotStudnet - Discount;
    var Invoice = [NotStudnet,Student]; 
    return (Invoice)
    }


    // First Invoice Tomato Bruschetta + Grilled Salmon + Carrot Cake + Coke

    console.log("Your Invoice is : " + studentInvoice(1.99,7.99,3.99,2.49)[0])  // Invoice Not Student
    console.log("Your Invoice after Discount is : " + studentInvoice(1.99,7.99,3.99,2.49)[1]) // Invoice Student


    // Second Invoice French Onion Soup + Eggplants Lasagne + Cheese Cake + Beer

    console.log("Your Invoice is : " + studentInvoice(3.49,9.99,4.50,1.49)[0])  // Invoice Not Student
    console.log("Your Invoice after Discount is : " + studentInvoice(3.49,9.99,4.50,1.49)[1]) // Invoice Student


    // Third Invoice : Caesar Salad + Marrakesh vegetarian Curry + Mexican Sundae + Nutella Shake

    console.log("Your Invoice is : " + studentInvoice(5.49,4.99,6.99,5.49)[0])  // Invoice Not Student
    console.log("Your Invoice after Discount is : " + studentInvoice(5.49,4.99,6.99,5.49)[1]) // Invoice Student







