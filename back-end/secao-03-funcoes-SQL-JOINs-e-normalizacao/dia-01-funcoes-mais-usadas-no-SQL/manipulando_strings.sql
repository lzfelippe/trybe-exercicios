USE sakila;

SELECT UCASE(title) FROM sakila.film LIMIT 10;

SELECT LCASE(title) FROM sakila.film LIMIT 10;

SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;

SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;

SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;

SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;

SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;

SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;

-- PRA FIXAR -- 
SELECT UCASE('trybe');

SELECT REPLACE('A Internet mudou o mundo', 'Internet', 'IA');

SELECT CHAR_LENGTH('Uma frase qualquer');

SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

SELECT LCASE('RUA NORTE 1500, RIO DE JANEIRO, BRASIL');
