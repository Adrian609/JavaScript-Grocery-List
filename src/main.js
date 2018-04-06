// Meets Expectations
document.getElementById("getList").addEventListener('click', onClick);
document.getElementById("deleteItem").addEventListener('click', selectedItemForDeletion);

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

function onClick() {
  summary(groceryList);
}
function selectedItemForDeletion() {
  var x = document.getElementById("mySelect").selectedIndex;
  console.log(x);
  groceryList.splice(x, 1);
  console.log(x);
  console.log(groceryList);
  summary(groceryList);
}

function summary(arr) {
  if (arr === 0) {
    var output = 0;
    console.log(output);
    document.getElementById("main").innerHTML = output;
  } else {
    var output = `<p><pre>Inventory:</pre></p><select id="mySelect">`;
    var objCopy = { arr };
    console.log(objCopy);
    for (var i = 0; i < arr.length; i++) {
      var obj = arr[i];
      output += `<option class="list-group-item">${i + 1 + " - " + Object.values(obj)}</option>`;
      console.log(arr[i]);
    }
  }
  output += `<select>`;
  console.log(output);
  document.getElementById("main").innerHTML = output;
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

