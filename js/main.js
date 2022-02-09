var parsedStarters = JSON.parse(Starters);
var parsedMain = JSON.parse(MainCourse);
var parsedDesserts = JSON.parse(Desserts);
var parsedBev = JSON.parse(Beverages);

var products = [...parsedStarters,...parsedMain,...parsedDesserts,...parsedBev];
var menuContainer= document.getElementById("menuContainer");
var log = console.log;
function printAllBefore() {
  Printfunction(parsedStarters,"startersRow");
  Printfunction(parsedMain,"mainCourseRow");
  Printfunction(parsedDesserts,"dessertsRow");
  Printfunction(parsedBev,"beveragesRow");
  }
  printAllBefore();

  function printAllAfter() {
    menuContainer.innerHTML=" ";
    menuContainer.innerHTML=(`<h1 class="text-center section-title">Starters</h1>
    <div class="row" id="startersRow">
    </div>
    <h1 class="text-center section-title">Main Course</h1>
    <div class="row" id="mainCourseRow">
    </div>
    <h1 class="text-center section-title">Desserts</h1>
    <div class="row" id="dessertsRow">
    </div>
    <h1 class="text-center section-title">Beverages</h1>
    <div class="row" id="beveragesRow">
    </div>`)
    printAllBefore()
  }

function Printfunction (arr,id) {
    for (val1 of arr){
      document.getElementById(id).innerHTML +=`
        <div class="card col-sm-12 col-md-5 col-lg-3 p-0 offset-lg-0 offset-md-1">
        <div class="card-body">
          <h5 class="card-title fw-bold"> ${val1.title} </h5>
          <p class="card-text description-text"> ${val1.description? val1.description: document.getElementsByClassName("description-text").innerHTML=""}</p>
          <p class="price">Price: ${val1.price}</p>
          <button class="btn btn-success card-btn">Add to Cart <i class="fa fa-cart-plus fa-lg"></i></button>
        </div>
        <figure class="imgContainer m-0">
          <img src="${val1.image}" alt="${val1.title}"/>
        </figure>
      </div>`
    }
}
function printSeparate(x) {
  menuContainer.innerHTML=" "
  menuContainer.innerHTML = `<div class="container-fluid">
  <div class="row" id="mainRow"</div>
  </div>`
    for (val of x){
        document.getElementById("mainRow").innerHTML +=` 
          <div class="card col-4 pe-0 offset-1">
          <div class="card-body">
            <h5 class="card-title fw-bold">${val.title}</h5>
            <p class="card-text description-text"> ${val.description? val.description: document.getElementsByClassName("description-text").innerHTML=""}</p>
            <p class="price">Price: ${val.price}</p>
            <button class="btn btn-success">add</button>
          </div>
          <figure class="imgContainer m-0">
            <img src="${val.image}" alt="${val.title}"/>
          </figure>
        </div>`
      }
}
document.getElementById("all-button").addEventListener('click', function () {printAllAfter()})
document.getElementById("starters-button").addEventListener('click', function () {printSeparate(parsedStarters)})
document.getElementById("mainCourse-button").addEventListener('click', function () {printSeparate(parsedMain)})
document.getElementById("desserts-button").addEventListener('click', function () {printSeparate(parsedDesserts)})
document.getElementById("beverages-button").addEventListener('click', function () {printSeparate(parsedBev)})

const cartItems = [];
var totalSum=[];
var sum=0;

function addtoCart(item) {
    if(cartItems.length==0){
      cartItems.push(item);
    }else if(cartItems.find((val) =>val.title == item.title)){
      item.qtty++;
    }else{
      cartItems.push(item);
    }
}

let buttons = document.getElementsByClassName("card-btn");
for(let i =0; i<buttons.length;i++){
  buttons[i].addEventListener('click',function(){
    addtoCart(products[i])
    createTableRow(i)

  })
}
function createTableRow() {
  document.getElementById('tableBody').innerHTML = " ";
  for (let val of cartItems){
    document.getElementById('tableBody').innerHTML += `
  <tr class="tableRow">
   <td class="fs-5">${val.title}</td>
   <td>
       <button class="btn btn-danger qttyminus">-</button>
       <span class="fw-bold fs-5 p-1 countContainer">${val.qtty}</span>
      <button class="btn btn-success qttyplus">+</button>
   </td>
   <td class="fs-5 priceContainer">${sum=(val.price * val.qtty).toFixed(2)}</td>
 </tr>`;
}
  totalSum.push(+sum);
  total()

  var plusButtons= document.getElementsByClassName("qttyplus");
  var minusButtons =document.getElementsByClassName("qttyminus");
  for(let i =0; i<plusButtons.length;i++){  
      plusButtons[i].addEventListener('click',function(){
      plusQtty(i); 
 })
  minusButtons[i].addEventListener("click",function(){
    minusQtty(i);
  })
 }
}
function plusQtty(i){
  cartItems[i].qtty++;
  document.getElementsByClassName("countContainer")[i].innerHTML = cartItems[i].qtty;
  document.getElementsByClassName("priceContainer")[i].innerHTML = (cartItems[i].qtty * cartItems[i].price).toFixed(2);
  totalSum.push(+cartItems[i].price.toFixed(2));
  total()
}

function minusQtty(i) {
  if(cartItems[i].qtty>=2){
  cartItems[i].qtty--;
  document.getElementsByClassName("countContainer")[i].innerHTML = cartItems[i].qtty;
  document.getElementsByClassName("priceContainer")[i].innerHTML = (cartItems[i].qtty * cartItems[i].price).toFixed(2);
  totalSum.splice(i,1);
  total()
}else{
  removeItem(i)
  document.getElementById('totalContainer').innerHTML = "0.00 €";
}
}
function total() {
  let FinalSum= totalSum.reduce((pre,curr)=>{
    let resultSum =+(pre + curr).toFixed(2);
    return resultSum
  })
  document.getElementById('totalContainer').innerHTML = FinalSum + " €";
}
function removeItem(i) {
  cartItems.splice(i,1);
  createTableRow();    
}









// // Function to calculate the Invoice with 4 Parameters
// function calculateInvoice(starterPrice,maindishPrice,dessertPrice,beveragePrice){
//     let Sum = Math.ceil(starterPrice) + Math.ceil(maindishPrice) + Math.ceil(dessertPrice) + Math.ceil(beveragePrice);
//     console.log("Invoice is : " + Sum + " Euro");
//     return (Sum);
// }

// // Passing 4 Variables as Arguments to the Function

// var springRolls = Math.round(2.99);
// var Beef = Math.round(8.99);
// var CarrotCake = Math.round(3.99);
// var Coke = Math.round(2.49);
// console.log("The Invoice is : " + calculateInvoice(springRolls,Beef,CarrotCake,Coke))


// // Different Invoices (using one dish of each category)
// // Invoice 1 : Tomato Bruschetta + Grilled Salmon + Carrot Cake + Coke

// calculateInvoice(1.99,7.99,3.99,2.49);

// // Invoice 2 : French Onion Soup + Eggplants Lasagne + Cheese Cake + Beer 

// calculateInvoice(3.49,9.99,4.50,1.49);

// // Invoice 3 : Caesar Salad + Marrakesh vegetarian Curry + Mexican Sundae + Nutella Shake 

// calculateInvoice(5.49,4.99,6.99,5.49);

// // Invoice 4  : Spring Rolls + Marrakesh vegetarian Curry + Coconut Cream Pie + Beer
// calculateInvoice(2.99,4.99,5.49,1.49);



// StudentInvoice


// function studentInvoice(starterPrice,maindishPrice,dessertPrice,beveragePrice){
//     let NotStudnet = Math.round(starterPrice) + Math.round(maindishPrice) + Math.floor(dessertPrice)
//      + Math.round(beveragePrice);
//     let Discount = ((Math.round(starterPrice) + Math.round(maindishPrice) + Math.floor(dessertPrice)) * 10) / 100;
//     let Student = NotStudnet - Discount;
//     var Invoice = [NotStudnet,Student]; 
//     return (Invoice)
//     }


//     // First Invoice Tomato Bruschetta + Grilled Salmon + Carrot Cake + Coke

//     console.log("Your Invoice is : " + studentInvoice(1.99,7.99,3.99,2.49)[0])  // Invoice Not Student
//     console.log("Your Invoice after Discount is : " + studentInvoice(1.99,7.99,3.99,2.49)[1]) // Invoice Student


//     // Second Invoice French Onion Soup + Eggplants Lasagne + Cheese Cake + Beer

//     console.log("Your Invoice is : " + studentInvoice(3.49,9.99,4.50,1.49)[0])  // Invoice Not Student
//     console.log("Your Invoice after Discount is : " + studentInvoice(3.49,9.99,4.50,1.49)[1]) // Invoice Student


//     // Third Invoice : Caesar Salad + Marrakesh vegetarian Curry + Mexican Sundae + Nutella Shake

//     console.log("Your Invoice is : " + studentInvoice(5.49,4.99,6.99,5.49)[0])  // Invoice Not Student
//     console.log("Your Invoice after Discount is : " + studentInvoice(5.49,4.99,6.99,5.49)[1]) // Invoice Student







