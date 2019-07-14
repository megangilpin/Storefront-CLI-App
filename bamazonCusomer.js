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
  displayProducts();
})

// function that displays all the products in the store
function displayProducts() {
  var query = "SELECT item_id,product_name,price FROM products";
  connection.query(query,function (err, res) {
      if (err) throw err;
      console.log(res)
      res.forEach(element => {
        console.log (element.item_id, element.product_name, element.price);
      })
    }
  );
}


