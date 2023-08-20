USE sakila;

SELECT AVG(length) AS 'Média de Duração'
FROM film;

SELECT MIN(length) AS 'Duração Mínima'
FROM film;

SELECT MAX(length) AS 'Duração Máxima'
FROM film;

SELECT SUM(length) AS 'Tempo de Exibição Total'
FROM film;

SELECT COUNT(*) AS 'Quantidade Total'
FROM film;

SELECT * FROM film;