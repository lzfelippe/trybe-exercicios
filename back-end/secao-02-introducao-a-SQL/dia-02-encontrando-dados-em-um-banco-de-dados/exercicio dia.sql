# 1 - Escreva uma query para exibir a string “This is SQL Exercise, Practice and Solution”.
SELECT "This is SQL Exercise, Practice and Solution";

# 2 - Escreva uma query para exibir três números em três colunas.
SELECT 1 AS primeiro, 2 AS segundo, 3 AS terceiro;

# 3 - Escreva uma query para exibir a soma dos números 10 e 15.
SELECT 10 + 15 AS soma;

# 4 - Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
SELECT 25 * 5 as multiplicação;

# 5 - Escreva uma query para exibir todas as informações de todos os cientistas.
SELECT * FROM Scientists;

# Renomeia Tabela
RENAME TABLE Scientists.Scientists TO Scientists.cientistas;

# 6 - Escreva uma query para exibir o nome como “Nome do Projeto” e as horas 
# como “Tempo de Trabalho” de cada projeto.
SELECT * FROM Scientists.cientistas;

# 7 - Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
SELECT 
	Name AS "nome_do_projeto",
    Hours AS "Tempo de Trabalho"
FROM Scientists.Projects;

# 8 - Escreva uma query para exibir o nome dos projetos em ordem alfabética descendente.
SELECT *
FROM Scientists.cientistas
ORDER BY Name; 

# 9 - Escreva uma query que exiba a string 
# “O projeto Name precisou de Hours horas para ser concluído.” para cada projeto.
SELECT "O projeto", Name, "precisou de", Hours, "horas para ser concluído"
FROM Scientists.Projects
ORDER BY Hours DESC; 

# 10 - Escreva uma query para exibir o nome e 
# as horas dos três projetos com a maior quantidade de horas.
SELECT
	Name,
    Hours
FROM Scientists.Projects
ORDER BY Hours DESC 
LIMIT 3;

# 11 - Escreva uma query para exibir o código de todos 
# os projetos da tabela AssignedTo sem que haja repetições.
SELECT DISTINCT Project
FROM Scientists.AssignedTo;

# 12 - Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
SELECT Name
FROM Scientists.Projects
ORDER BY Hours DESC
LIMIT 1; 

# 13- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
SELECT Name
FROM Scientists.Projects
ORDER BY Hours ASC
LIMIT 1 OFFSET 1;

# 14 - Escreva uma query para exibir todas as informações dos 
# cinco projetos com a menor quantidade de horas.
SELECT * 
FROM Scientists.Projects
ORDER BY Hours ASC
LIMIT 5;

# 15 - Escreva uma query que exiba a string “Existem Number cientistas na tabela Scientists.”,
# em que Number se refira a quantidade de cientistas.
SELECT "Existem ", COUNT(*), " cientistas na tabela Scientists."
FROM Scientists.cientistas;



