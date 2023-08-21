SELECT 
    *
FROM
    sakila.actor
WHERE
    first_name = 'JOHNNY'
        AND last_name = 'CAGE';

SELECT 
    *
FROM
    film
WHERE
    rental_duration = 6;
    
SELECT * 
FROM film
WHERE rating = 'R'
AND rental_duration = 6;

SELECT *
FROM film
WHERE (rating = 'R' OR rating = 'PG-13')
AND rental_duration = 6;

SELECT * 
FROM film
WHERE title IN( 
'AFFAIR PREJUDICE',
'AFRICAN EGG',
'AGENT TRUMAN',
'AIRPLANE SIERRA');

SELECT * 
FROM film
WHERE title NOT IN( 
'AFFAIR PREJUDICE',
'AFRICAN EGG',
'AGENT TRUMAN',
'AIRPLANE SIERRA');

SELECT * 
FROM film
WHERE length BETWEEN 120 and 150;

SELECT NOW();

SELECT * 
FROM sakila.rental
WHERE TIME(rental_date) = '00:07:11';

SELECT * 
FROM sakila.rental
WHERE DATE(return_date) BETWEEN '2005-05-26' AND '2005-06-27' 
ORDER BY return_date;

SELECT * 
FROM sakila.actor
WHERE first_name LIKE '%REY%';

SELECT * FROM film;


