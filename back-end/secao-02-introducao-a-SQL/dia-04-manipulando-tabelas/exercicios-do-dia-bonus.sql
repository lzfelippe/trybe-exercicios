USE pixar;

# 01
INSERT INTO movies(title, director, year, length_minutes)
VALUES 
	('Monstros SA', 'Pete Docter', 2001, 92),
    ('Procurando Nemo', 'John Lasseter', 2003, 107),
    ('Os Incríveis', 'Brad Bird', 2004, 116),
    ('WALL-E', 'Pete Docter', 2008, 104);
    
# 02
INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
VALUES (9, 6.8, 450000000, 370000000);

# 03
SET SQL_SAFE_UPDATES = 0;

UPDATE movies
SET director = 'Andrew Stanton'
WHERE title = 'Procurando Nemo';  

# 04
UPDATE movies
SET title = 'Ratatouille', year = '2007'
WHERE title LIKE 'rata%';

# 05
INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
VALUES 
	(8, 8.5, 300000000, 250000000),
    (10, 7.4, 460000000, 510000000),
    (11, 9.9, 290000000, 280000000);
    
# 06
DELETE FROM box_office
WHERE movie_id = 11;

DELETE FROM movies
WHERE title = 'WALL-E';

# 07
SELECT * 
FROM movies
WHERE director = 'Andrew Stanton';

DELETE FROM box_office
WHERE movie_id IN(2, 9);

DELETE FROM movies
WHERE ID IN(2, 9);  

-- exercicios bônus -- 

# 08
UPDATE box_office
SET rating = 9.0
WHERE domestic_sales > 400000000;

# 09
UPDATE box_office
SET rating = 6.0
WHERE domestic_sales > 200000000 AND international_sales < 300000000;


# 10 
SELECT id
FROM movies
WHERE length_minutes < 100;

DELETE from box_office
WHERE movie_id IN(1, 6, 7, 8);

DELETE FROM movies
WHERE length_minutes < 100;
    
SELECT * FROM box_office;
SELECT * FROM movies;
    