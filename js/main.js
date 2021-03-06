var parsedStarters = JSON.parse(Starters);var parsedMain = JSON.parse(MainCourse);var parsedDesserts = JSON.parse(Desserts);var parsedBev = JSON.parse(Beverages);
var products = [...parsedStarters,...parsedMain,...parsedDesserts,...parsedBev];
var menuContainer= document.getElementById("menuContainer");
Printfunction(parsedStarters,"startersRow");Printfunction(parsedMain,"mainCourseRow");Printfunction(parsedDesserts,"dessertsRow");Printfunction(parsedBev,"beveragesRow");
function Printfunction (arr,id) {
    for (val1 of arr){
      document.getElementById(id).innerHTML +=`
        <div class="card col-sm-12 col-md-6 col-lg-3 p-0 offset-lg-0 g-md-4 g-3">
        <div class="card-body d-flex flex-column w-50">
          <h5 class="card-title text-start"> ${val1.title} </h5>
          <p class=" description-text"> ${val1.description? val1.description: document.getElementsByClassName("description-text").innerHTML=""}</p>
          <button class="btn btn-success card-btn">Add to Cart <i class="fa fa-cart-plus"></i></button>
        </div>
        <figure class="imgContainer m-0 w-50">
        <span class="priceLabel">${val1.price} €</span>
          <img src="${val1.image}" alt="${val1.title}"/>
        </figure>
      </div>`}}
var sectionTitles= document.querySelectorAll("h1");
document.getElementById("all-button").addEventListener('click', function () {
  document.getElementById("startersRow").style.display="flex"
  document.getElementById("mainCourseRow").style.display="flex"
  document.getElementById("dessertsRow").style.display="flex"
  document.getElementById("beveragesRow").style.display="flex"
  sectionTitles.forEach((el)=>{el.style.display="block"});
})
document.getElementById("starters-button").addEventListener('click', function () {
  document.getElementById("startersRow").style.display="flex"
    document.getElementById("mainCourseRow").style.display="none"
    document.getElementById("dessertsRow").style.display="none"
    document.getElementById("beveragesRow").style.display="none"
    sectionTitles.forEach((el,index)=>  index==0 ? el.style.display="block" : el.style.display="none");
})
 document.getElementById("mainCourse-button").addEventListener('click', function () {
  document.getElementById("startersRow").style.display="none"
  document.getElementById("mainCourseRow").style.display="flex"
  document.getElementById("dessertsRow").style.display="none"
  document.getElementById("beveragesRow").style.display="none"
  sectionTitles.forEach((el,index)=>  index==1 ? el.style.display="block" : el.style.display="none");
  })
 document.getElementById("desserts-button").addEventListener('click', function () {
  document.getElementById("startersRow").style.display="none"
  document.getElementById("mainCourseRow").style.display="none"
  document.getElementById("dessertsRow").style.display="flex"
  document.getElementById("beveragesRow").style.display="none"
  sectionTitles.forEach((el,index)=>  index==2 ? el.style.display="block" : el.style.display="none");
  })
 document.getElementById("beverages-button").addEventListener('click', function () {
  document.getElementById("startersRow").style.display="none"
  document.getElementById("mainCourseRow").style.display="none"
  document.getElementById("dessertsRow").style.display="none"
  document.getElementById("beveragesRow").style.display="flex"
  sectionTitles.forEach((el,index)=>  index==3 ? el.style.display="block" : el.style.display="none");
})

var cartItems = [];
var itemNumber = document.getElementById('items-number');
itemNumber.style.background="none";

function addtoCart(item,i) {
    if(cartItems.length==0){
      cartItems.push(item);
      itemNumber.innerHTML = cartItems.length;
      itemNumber.style.background="black";
    }else if(cartItems.find((val) => val.title == item.title)){
        item.qtty++;   
}
    else{
      cartItems.push(item);
      itemNumber.innerHTML = cartItems.length;
    }
}
var buttons = document.getElementsByClassName("card-btn");
for(let i =0; i<buttons.length;i++){
  buttons[i].addEventListener('click',function(){
    addtoCart(products[i],i);
    createTableRow(i);
  })
}
function createTableRow() {
  document.getElementById('tableBody').innerHTML = " ";

  for (let val of cartItems){
    document.getElementById('tableBody').innerHTML += `
  <div class="tableRow container-fluid d-flex justify-content-between w-100">
   <div class="rowTiltle w-25">${val.title}</div>
   <div class="rowQtty w-25 text-end">
       <button class="btn btn-danger qttyminus btn-cart">-</button>
       <span class="fw-bold  p-1 countContainer">${val.qtty}</span>
      <button class="btn btn-success btn-cart qttyplus">+</button>
   </div>
   <div class="priceContainer w-25 text-center">${(val.price * val.qtty).toFixed(2)} <span><code> (total) ${val.qtty} item(s) </code></span> </div>
 </div><br>`;
}
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
  document.getElementsByClassName("priceContainer")[i].innerHTML =`${+(cartItems[i].qtty * cartItems[i].price).toFixed(2)}<span><code> (total) ${cartItems[i].qtty} item(s) </code></span>`;
  total()
}
function minusQtty(i) {
  if(cartItems[i].qtty>=2){
    cartItems[i].qtty--;
    document.getElementsByClassName("countContainer")[i].innerHTML = cartItems[i].qtty;
    document.getElementsByClassName("priceContainer")[i].innerHTML =` ${+(cartItems[i].qtty * cartItems[i].price).toFixed(2)}<span><code> (total) ${cartItems[i].qtty} item(s) </code></span>`;
    total();
  }else{ 
    removeItem(i)
    if (cartItems.length ==0) {
      itemNumber.style.background="none";
      itemNumber.innerHTML = " ";
    }else{itemNumber.innerHTML = cartItems.length;}
    

  }
}

function total() {
  let totalPrice=0;
  for (let i = 0; i < cartItems.length; i++) {
    totalPrice = +((cartItems[i].price * cartItems[i].qtty) + totalPrice).toFixed(2);
    document.getElementById('totalContainer').innerHTML =totalPrice;
  }
}
function removeItem(i) {
   cartItems.splice(i,1);
   if (cartItems.length==0) {
    document.getElementById('totalContainer').innerHTML ="0.00 €";
   }
   total()
   createTableRow(); 
}

var firstHeadingY = document.getElementsByClassName("section-title")[0].offsetTop;

window.onscroll = function () {
  if (window.scrollY >= window.innerHeight - firstHeadingY) {
    document.getElementById('cart-icon').style.visibility="visible"
  }
  else{
    document.getElementById('cart-icon').style.visibility="hidden";
  }
};



var cartIcon= document.getElementById('cart-icon');
cartIcon.addEventListener('click', ()=> {
  document.getElementsByClassName('cartContainer')[0].classList.add("cartContainerShow");
})


var hideArrow = document.getElementById("arrow-cart");
hideArrow.addEventListener('click', function () {
  document.getElementsByClassName("cartContainer")[0].classList.remove("cartContainerShow");
})
var cartButton = document.getElementById("cart-button");
cartButton.addEventListener("click", function () {
  document.getElementsByClassName('cartContainer')[0].classList.add("cartContainerShow");
})

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





// var test2 =[13,4,5,612,31]
// log(test2)
// var test3=test2.splice(2,1)
// log(test3)
// log(test2)

