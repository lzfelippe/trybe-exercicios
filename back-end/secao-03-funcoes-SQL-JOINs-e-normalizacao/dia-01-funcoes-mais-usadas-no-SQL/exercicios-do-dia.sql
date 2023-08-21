USE hr;

# 01
SELECT MAX(salary) AS maior_salario
FROM employees;

# 02-
SELECT MAX(salary) - MIN(salary)
FROM employees;

# 03-
SELECT job_id, AVG(salary)
FROM employees
GROUP BY job_id
ORDER BY salary DESC;

# 04
SELECT SUM(salary)
FROM employees;

# 05-
SELECT 
	MAX(salary) AS maior_salario,
    MIN(salary) AS menor_salario,
    SUM(salary) AS todos_salarios,
    ROUND(AVG(salary),2) AS media_salarial
FROM employees;

# 06
SELECT job_id, COUNT(*)
FROM employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';

# 07
SELECT job_id, SUM(salary)
FROM employees
GROUP BY job_id;

# 08
SELECT job_id, SUM(salary)
FROM employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';

# 09
SELECT job_id, ROUND(AVG(salary),2) AS media_salarial
FROM employees
GROUP BY job_id
HAVING job_id <> 'IT_PROG'
ORDER BY media_salarial DESC;

# 10-
SELECT 
	department_id AS ID_setor,
    COUNT(*) AS funcionarios,
    ROUND(AVG(salary),2) AS media_salarial
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 10;

# 11-
SET SQL_SAFE_UPDATES = 0;

UPDATE employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

# 12
SELECT * 
FROM employees
WHERE LENGTH(first_name) >= 8; 

# 13
SELECT 
	employee_id,
    first_name,
    YEAR(hire_date)
FROM employees;

# 14-
SELECT 
	employee_id,
    first_name,
    DAY(hire_date)
FROM employees;

# 15
SELECT 
	employee_id,
    first_name,
    MONTH(hire_date)
FROM employees;

# 16
SELECT UCASE(CONCAT(first_name, ' ', last_name)) AS full_name
FROM employees;

# 17
SELECT last_name, hire_date
FROM employees
WHERE DATE(hire_date) LIKE '1987-07%';

# 18-
SELECT 
	first_name,
    last_name,
    DATEDIFF(CURRENT_DATE(), hire_date) dias_trabalhados
FROM employees;
    

SELECT * FROM employees;