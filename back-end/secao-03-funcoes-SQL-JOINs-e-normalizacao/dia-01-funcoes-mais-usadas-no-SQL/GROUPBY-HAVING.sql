USE sakila;
-- GROUP BY ---
# 01
SELECT active, COUNT(*)
FROM customer
GROUP BY active;

# 02
SELECT active, store_id, COUNT(*)
FROM customer
GROUP BY active, store_id;

# 03
SELECT AVG(rental_duration) AS avg_rental_duration, rating
FROM film
GROUP BY rating
ORDER BY avg_rental_duration DESC;

# 04 
SELECT district, COUNT(*)
FROM address
GROUP BY district
ORDER BY COUNT(*) DESC;

-- HAVING ---

# 01
SELECT rating, AVG(length) AS average
FROM film
GROUP BY rating
HAVING average BETWEEN 115.00 AND 121.50
ORDER BY average DESC; 

# 02
SELECT rating, SUM(replacement_cost) AS total
FROM film
GROUP BY rating
HAVING total > 3950.50
ORDER BY total;

SELECT * FROM address; 