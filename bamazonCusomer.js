var mysql = require("mysql")
var inquirer = require("inquirer")

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Welcome468",
  database: "bamazon"
})

connection.connect(function (err) {
  if (err) throw err;
  buyProduct();
})

// function that displays all the products in the store
function displayProducts() {
  var query = "SELECT item_id,product_name,price FROM products";
  connection.query(query,function (err, res) {
      if (err) throw err;
      res.forEach(element => {
        console.log ("ID " + element.item_id + ": ", element.product_name, element.price);
      })
    }
  );
}

function buyProduct() {
  inquirer.prompt([
    {
      type: "input",
      name: "buy",
      message: "What is the ID number of the product you would like to buy?"
    },
    {
      type: "input",
      name: "amount",
      value: "number",
      message: "How many would you like to buy?"
    },
  ]).then(function (answer) {
  var orderAmount = answer.amount
  var id = answer.buy
    connection.query(
      "SELECT * FROM products WHERE ?",
      {
        item_id: id
      }, 
      function (err, res) {
        if (err) throw err;
        var stockAmount = res[0].stock_quantity;
        var productName = res[0].product_name;
        var cost = res[0].price
        checkStock(stockAmount, orderAmount, productName, cost, id);
      }
    )
  });
}

// Checks if the stock quantity is less than the amount. If their is enough stock the order is processed
function checkStock(stockAmount, orderAmount, productName, cost, id) {
  if (stockAmount < orderAmount) {
    console.log("Our stock on " + productName + " is too low, your order can not be processed. Sorry for the inconvenience.")
  }
  else{
    processOrder(stockAmount, orderAmount, productName, id, cost);
  }
}

// Processes an order and updates the mysql table with the new stock amount
function processOrder(stockAmount, orderAmount, productName, id, cost) {
  var stockUpdate = parseFloat(stockAmount) - parseFloat(orderAmount);
  var orderTotal = parseFloat(orderAmount) * parseFloat(cost);
  connection.query(
    "UPDATE products SET ? WHERE ?",
    [{
      stock_quantity: stockUpdate 
    },
    {
      item_id: id
    }], 
    function (err, res) {
      if (err) throw err;
      console.log("Your account will be charged $" + orderTotal + " for " + orderAmount + " units of " + productName)
    }
    )
  };
  