var mysql = require("mysql")
var inquirer = require("inquirer")

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
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
    connection.query(
      "SELECT * FROM products WHERE ?",
      {
        item_id: answer.buy
      }, 
      function (err, res) {
        if (err) throw err;
        var stockAmount = res[0].stock_quantity;
        var productName = res[0].product_name;
        checkStock(stockAmount, orderAmount, productName);
      }
    )
  });
}

// checks if the stock quantity is less than the amount. If their is enough stock the order is processed
function checkStock(stockAmount, orderAmount, productName) {
  if (stockAmount < orderAmount) {
    console.log("Our stock on " + productName + " is too low, your order can not be processed. Sorry for the inconvenience.")
  }
  else{
    processOrder();
  }
}

// processes an order
function processOrder() {
  console.log("Order has been processed")
};