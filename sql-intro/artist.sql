
-- insert new artists
INSERT INTO artist (name)
	VALUES('St. Paul & The Broken Bones'),
  ('Alabama Shakes'), ('Lee Fields');

-- select 10 artists in reverse alphabetical order
  SELECT * FROM artist
  ORDER BY name DESC
  LIMIT 10;

-- select 5 artists in alphabetical order
  SELECT * FROM artist
  ORDER BY name 
  LIMIT 5;

-- select artists that start with the word Black
  SELECT * FROM artist WHERE name LIKE 'Black%';

-- select artists that contain the word Black
  SELECT * FROM artist WHERE name LIKE '%Black%';