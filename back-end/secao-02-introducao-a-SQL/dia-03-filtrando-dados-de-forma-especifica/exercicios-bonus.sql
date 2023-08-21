USE Scientists;

# 01
SELECT *
FROM Scientists
WHERE name LIKE '%E%';

# 02
SELECT *
FROM Projects
WHERE Code LIKE 'A%'
ORDER BY Name;

# 03
SELECT Code, Name
FROM Projects
WHERE Code LIKE '%3%'
ORDER BY name;

# 04
SELECT Scientist
FROM AssignedTo
WHERE Project IN ('AeH3', 'Ast3', 'Che1');

# 05
SELECT * 
FROM Projects
WHERE Hours > 500;

# 06
SELECT * 
FROM Projects
WHERE Hours > 250 AND Hours < 800;

# 07
SELECT Code, Name
FROM Projects
WHERE Name NOT LIKE 'A%';

# 08
SELECT Name
FROM Projects
WHERE Code LIKE '%H%';

SELECT * FROM Projects;
