DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
  `item_id` INTEGER NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR (255) NOT NULL,
  `department_name` VARCHAR(255),
  `price`FLOAT (6, 2) NOT NULL,
  `stock_quantity` INTEGER(11) NOT NULL,
  PRIMARY KEY (`item_id`)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("The Adventures of Tom Sawyer", "Books", 11.99, 55);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Walkman", "Electronics", 32.99, 15);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Blender 3000", "Kitchen-Electronics", 99.99, 5);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Conversation Sneakers", "Shoes", 42.99, 25);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Meet the Beatles", "Music", 9.99, 65);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Melt Town Laminator", "Office-Electronics", 19.99, 21);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Deluxe Elvis Costume", "Kids'-Costumes", 29.99, 8);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Cocktail Muddler", "Kitchen-Gadgets", 9.99, 79);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("300 Piece World Puzzle", "Jigsaw-Puzzles", 29.99, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Giant Playing Cards", "Leisure-Sports", 13.99, 12);
