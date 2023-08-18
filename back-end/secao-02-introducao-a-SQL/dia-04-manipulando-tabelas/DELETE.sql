SET SQL_SAFE_UPDATES = 0;

USE sakila; 

DELETE FROM sakila.actor
WHERE first_name = 'GRACE';

-- Error Code: 1451. Cannot delete or update a parent row: 
-- a foreign key constraint fails (`sakila`.`film_actor`, CONSTRAINT `fk_film_actor_actor` FOREIGN KEY (`actor_id`)
--  REFERENCES `actor` (`actor_id`) ON DELETE RESTRICT ON UPDATE CASCADE)
 
 # Exclua do banco de dados o ator com o nome de “KARL”.
 DELETE FROM film_actor
 WHERE actor_id = 12;
 
 DELETE FROM actor
 WHERE first_name = 'KARL';
 
 # Exclua do banco de dados os atores com o nome de “MATTHEW”.
DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM actor
WHERE first_name = 'MATTHEW';
 
 # Exclua da tabela film_text todos os 
 # registros que possuem a palavra “saga” em suas descrições.
 DELETE FROM film_text
 WHERE description LIKE '%saga%';
 
 # Apague da maneira mais performática
 # possível todos os registros das tabelas film_actor e film_category.
 TRUNCATE film_actor;
 TRUNCATE film_category;
 
 # Inspecione todas as tabelas do banco de dados sakila e analise 
 # quais restrições ON DELETE foram impostas em cada uma.
 # Use o Table Inspector para fazer isso (aba DDL).
 
 
 DESC sakila.actor;
  
 SELECT * FROM film_text;
 
