USE hr;

-- EXEMPLO
SELECT
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente",
	COUNT(*)
FROM
    employees AS Manager
INNER JOIN
    employees AS employee ON employee.manager_id = Manager.employee_id
GROUP BY Manager.employee_id;

# 01
SELECT	
	CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.manager_id = Manager.employee_id
WHERE Employee.department_id <> Manager.department_id;

# 02
SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.manager_id = Manager.employee_id;
    
SELECT * FROM employees;