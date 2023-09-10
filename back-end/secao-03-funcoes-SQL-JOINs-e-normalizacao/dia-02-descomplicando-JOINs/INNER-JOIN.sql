USE sakila;

# 01
SELECT 
	act.actor_id,
    act.first_name,
    fil.film_id
FROM actor AS act
INNER JOIN film_actor AS fil
ON act.actor_id = fil.actor_id;

# 02
SELECT 
	st.first_name,
    st.last_name,
    ad.address
FROM staff AS st
INNER JOIN address AS ad
ON st.address_id = ad.address_id;
    
# 03
SELECT 
	cu.customer_id,
    cu.first_name,
    cu.email,
    ad.address_id,
    ad.address
FROM customer AS cu
INNER JOIN address AS ad
ON cu.address_id = ad.address_id
ORDER BY cu.first_name DESC
LIMIT 100;
    
# 04
SELECT 
	cu.first_name,
    cu.email,
    cu.address_id,
    ad.address,
    ad.district
FROM customer AS cu
INNER JOIN address AS ad
ON cu.address_id = ad.address_id
WHERE ad.district = 'California' 
AND cu.first_name LIKE '%rene%'; 

# 05
SELECT 
	c.first_name,
    c.last_name,
    COUNT(r.rental_id) AS 'Quantidade de filmes alugados'
FROM customer AS c
INNER JOIN rental AS r
ON c.customer_id = r.customer_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC, c.last_name DESC;

# 06
SELECT 
	s.first_name,
    s.last_name,
    AVG(p.amount) AS 'média de pagamento'
FROM staff AS s
INNER JOIN payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;

# 07
SELECT 
	a.actor_id,
    a.first_name,
    f.film_id,
    f.title
FROM actor AS a
INNER JOIN film_actor AS fact
	ON a.actor_id = fact.actor_id 
INNER JOIN film AS f
	ON f.film_id = fact.film_id;
	

SELECT * FROM actor;
SELECT * FROM film_actor;
SELECT * FROM film;