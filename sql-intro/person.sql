
-- create a table
CREATE TABLE person(
	id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INTEGER NOT NULL,
  height FLOAT,
  city VARCHAR(50) NOT NULL,
  favorite_color VARCHAR(20)
);

-- add 5 people into person table
INSERT INTO person (name, age, height, city, favorite_color)
	VALUES ('John', 28, 182.88, 'Baton Rouge', 'blue'),
  ('Richard', 35, 174.42, 'New Orleans', 'red'),
  ('Sandra', 25, 124.25, 'New Roads', 'purple'),
  ('Rebekah', 44, 130.75, 'Central', 'purple'),
  ('Nate', 45, 196.50, 'Greenwell Springs', 'blue'),
  ('Megan', 40, 179.88, 'Greenwell Springs', 'yellow');


-- select by height from tallest to shortest
  SELECT * FROM person ORDER BY height DESC;

-- select by height shortest to tallest
  SELECT * FROM person ORDER BY height;

-- select by age oldest to youngest
  SELECT * FROM person ORDER BY age DESC;

-- select by age older than 20
  SELECT * FROM person WHERE age > 20;

-- select by age that is exactly 18
  SELECT * FROM person WHERE age = 18;

-- select by age that is less than 20 and older than 30
  SELECT * FROM person WHERE age < 20 AND age > 30;

-- select by age not equal to 27
  SELECT * FROM person WHERE age != 27;

-- select by favorite color not equal to red
  SELECT * FROM person WHERE favorite_color != 'red';

-- select by favorite color not equal to red or blue
  SELECT * FROM person WHERE favorite_color != 'red' AND favorite_color != 'blue';

-- select by favorite color equal to orange or green
  SELECT * FROM person WHERE favorite_color = 'orange' OR favorite_color = 'green';

-- select where favorite color is orange, green or blue using in
  SELECT * FROM person WHERE favorite_color IN ('orange', 'green', 'blue');

-- select where favorite color is yellow or purple
  SELECT * FROM person WHERE favorite_color IN ('yellow', 'purple');




