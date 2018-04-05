// Meets Expectations
document.getElementById("getList").addEventListener('click', onClick);
document.getElementById("deleteItem").addEventListener('click', deleteItem);

// In `main.js` write code to create four different `
// GroceryItems` and store those `GroceryItems` objects in an **array** called `groceryList`.
var groceryList = [
    new GroceryItem("apple", .50, 5),
    new GroceryItem("Banana", .70, 2),
    new GroceryItem("Pizza", 2.50, 1),
    new GroceryItem("Corn meal", 1.50, 1)
  ];
// In `main.js` create a `summary` function that takes 1 argument, an array of `GroceryItems`. 
// When you call `summary(groceryList);` your function should 
function onClickSelectedItem(){
  document.getSelection().addEventListener('click',selectedItem)
}
function onClick(){
  summary(groceryList);
}
function selectedItem() {
  var x = document.getSelection("");
  alert(x);
  console.log(x)
}
function summary(arr) {
  var output = `<p><pre>Inventory:</pre></p><ul id="mySelect">`;
  var objCopy={arr};
  console.log(objCopy);
  for(var i =0;i<arr.length;i++) {
        var obj= arr[i];
        output += `<li data-toggle="list" class="list-group-item deleteItem">${i+1+" - "+Object.values(obj)}</li>`;
        console.log(arr[i]);
  } 
  output +=`<ul>`;
  console.log(output);
  document.getElementById("main").innerHTML = output;
}
function deleteItem(summaryList){
    
  
  summaryList.splice();
}

// Exceeds Expectations
let inventoryNearMe = {
  banana: 2,
  coffee: 2,
  kale: 5,
  chocolateBar: 5,
  apple: 10,
  potato: 11,
  tomato: 1,
  beer: 3,
  avocado: 1,
  milk: 5
};

let inventoryNearBestie = {
  banana: 2,
  coffee: 2,
  kale: 5,
  chocolateBar: 5,
  apple: 10,
  potato: 11,
  tomato: 1,
  beer: 6,
  avocado: 10,
  milk: 5
};

