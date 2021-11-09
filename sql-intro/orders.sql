-- create a new table
CREATE TABLE orders (
	order_id SERIAL PRIMARY KEY,
  person_id INTEGER NOT NULL,
  product_name VARCHAR(60) NOT NULL,
  product_price FLOAT NOT NULL,
  quantity INTEGER NOT NULL
);

-- add 5 orders to the table
INSERT INTO orders ( person_id, product_name, product_price, quantity)
	VALUES (1, 'Spaghetti', 15.99, 1),
	      (1, 'Cheese Sticks', 8.99, 6),
	      (2, 'Meatballs', 6.99, 2),
	      (1, 'Lasagna', 13.99, 1),
        (3, 'Beef Bolognese', 17.99, 1);

-- select all records
SELECT * FROM orders;

-- sum number of products ordered
SELECT COUNT(*)FROM orders;

-- calculate the total order price
SELECT SUM(product_price) FROM orders;

-- calculate the total order price by a single person id
SELECT SUM(product_price), person_id
	FROM orders
  GROUP BY person_id;
