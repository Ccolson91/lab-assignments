-- find the sum of totals in the invoice table grouped by billing_state
SELECT SUM(total), billing_state
	FROM invoice 
  GROUP BY billing_state;

  -- find the average track length (in milliseconds) by album; order the table by the averages
  SELECT AVG(milliseconds), album_id
	FROM track
  GROUP BY album_id
  order by 1;

  -- find a count of how many albums the artists with the ids 8 and 22 have respectively. use COUNT, WHERE/IN and GROUP BY
SELECT COUNT(*), artist_id
	FROM album
  WHERE artist_id IN (8, 22)
  GROUP BY artist_id;