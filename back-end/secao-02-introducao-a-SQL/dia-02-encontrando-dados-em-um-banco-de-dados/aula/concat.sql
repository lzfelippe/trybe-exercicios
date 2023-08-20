USE sakila;
SELECT CONCAT(first_name, " ", last_name) AS "Nome completo" FROM actor;

SELECT CONCAT(title, " ", release_year) AS "Lançamento do Filme" FROM film;

SELECT CONCAT(address, " ", district) AS "Endereço" FROM address;

SELECT * FROM address;