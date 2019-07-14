CREATE database bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL (13, 4) NOT NULL,
  stock_quanity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quanity)
  VALUES("flour", "dry goods", 1.89, 3000);

INSERT INTO products (product_name, department_name, price, stock_quanity)
  VALUES("sugar", "dry goods", 2.08, 2000);

INSERT INTO products (product_name, department_name, price, stock_quanity)
  VALUES("batise dry shampoo", "beauty", 5.89, 1000);

INSERT INTO products (product_name, department_name, price, stock_quanity)
  VALUES("OxiClean Laundry Stain Remover Spray", "cleaning", 3.09, 3500);

INSERT INTO products (product_name, department_name, price, stock_quanity)
  VALUES("milk", "dairy", 2.99, 3500);

INSERT INTO products (product_name, department_name, price, stock_quanity)
  VALUES("kraft singles american cheese", "dairy", 2.99, 3000);

INSERT INTO products (product_name, department_name, price, stock_quanity)
  VALUES("pantene pro-v daily moisture renewal shampoo", "beauty", 4.97, 500);

INSERT INTO products (product_name, department_name, price, stock_quanity)
  VALUES("nature's bounty vitamin e-oil", "health", 4.83, 100);

INSERT INTO products (product_name, department_name, price, stock_quanity)
  VALUES("ball park hot dog buns", "bakery", 2.79, 600);

INSERT INTO products (product_name, department_name, price, stock_quanity)
  VALUES("oscar mayer wieners", "meat", 2.50, 600);