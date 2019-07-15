DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL (13, 4) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES("flour", "dry goods", 1.89, 3000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES("sugar", "dry goods", 2.08, 2000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES("batise dry shampoo", "beauty", 5.89, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES("OxiClean Laundry Stain Remover Spray", "cleaning", 3.09, 3500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES("milk", "dairy", 2.99, 3500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES("kraft singles american cheese", "dairy", 2.99, 3000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES("pantene pro-v daily moisture renewal shampoo", "beauty", 4.97, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES("nature's bounty vitamin e-oil", "health", 4.83, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES("ball park hot dog buns", "bakery", 2.79, 600);

INSERT INTO products (product_name, department_name, price, stock_quantity)
  VALUES("oscar mayer wieners", "meat", 2.50, 600);