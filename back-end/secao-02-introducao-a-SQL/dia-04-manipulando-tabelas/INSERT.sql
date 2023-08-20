USE sakila;

# Insira um novo funcionário na tabela sakila.staff.
# Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e
# selecione Table Inspector. Clique na aba columns e verifique quais campos aceitam nulos para te guiar.
# Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa exploração!
INSERT INTO staff(
	first_name,
    last_name,
    address_id,
    store_id,
    active,
    username
)
VALUES(
	'Luiz',
    'Felipe',
    '5',
    '2',
    '1',
    'Luizera'
);

# Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO staff(
	first_name,
    last_name,
    address_id,
    store_id,
    active,
    username
)
VALUES
	('Nathalia', 'Faria', '6', '1', '1', 'Nath'),
    ('Manuele', 'Faria', '7', '2', '1', 'Manu');

# Selecione os cinco primeiros nomes e sobrenomes da tabela
# sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO actor(first_name, last_name)
	SELECT first_name, last_name
	FROM customer
    ORDER BY customer_id
    LIMIT 5;
    
# Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO category(name)
VALUES 
	('Anime'),
    ('Ficção'),
    ('Mitologia');
    
# Cadastre uma nova loja na tabela sakila.store.
INSERT INTO store(manager_staff_id, address_id)
VALUE ('3','3');

SELECT * FROM store;
