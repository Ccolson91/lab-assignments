-- find all customers with fax numbers and set those numbers to null
UPDATE customer
	SET fax = 'null'
  WHERE fax IS NOT NULL;

-- find all customers with no company(null) and set their company to "self"

UPDATE customer
	SET company = 'self'
  WHERE company IS NULL;

  -- find the customer Julia Barnett and change her last name to Thompson

  UPDATE customer
	SET last_name = 'Thompson'
  WHERE first_name = 'Julia' AND last_name = 'Barnett';

  -- find the customer with this email luisrojas@yahoo.cl and change his support rep to 4

  UPDATE customer
	SET support_rep_id = 4
  WHERE email = 'luisrojas@yahoo.cl';

  -- find all tracks that are the genre Metal and have no composer. Set the composer to"The darkness around us".

  UPDATE track
	SET composer = 'The darkness around us'
  WHERE genre_id = (SELECT genre_id FROM genre WHERE name = 'Metal')
  AND composer IS NULL;