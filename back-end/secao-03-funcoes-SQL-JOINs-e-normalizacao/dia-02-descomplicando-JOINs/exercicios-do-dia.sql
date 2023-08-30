USE pixar;

# 01
SELECT 
	m.title,
    b.domestic_sales,
    b.international_sales
FROM movies AS m
INNER JOIN box_office AS b
	ON m.id = b.movie_id;

# 02
SELECT 
	m.title,
    (b.domestic_sales + b.international_sales) AS 'Vendas'
FROM movies AS m
INNER JOIN box_office AS b
	ON m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;
    
# 03

SELECT * FROM movies;
SELECT * FROM box_office;
SELECT * FROM theater;