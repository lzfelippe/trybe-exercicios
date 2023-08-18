USE northwind_test;

# 01
SELECT product_name 
FROM products;

# 02
SELECT * 
FROM products;

# 03
SELECT id 
FROM products;

# 04
SELECT COUNT(product_name)
FROM products;

# 05 
SELECT *
FROM products
LIMIT 10 OFFSET 3;

# 06
SELECT product_name, id
FROM products
ORDER BY product_name;

# 07
SELECT id
FROM products
ORDER BY id DESC
LIMIT 5;

# 08
SELECT 
	CONCAT(first_name,' ',last_name) AS "full_name",
    CONCAT(city,'-',state_province,', ',address) AS "location"
FROM employees;

# 09
SELECT notes
FROM purchase_orders
WHERE notes NOT LIKE '';

# 10
SELECT * 
FROM purchase_orders
WHERE created_by >= 3
ORDER BY created_by DESC;

# 11
SELECT notes
FROM purchase_orders
WHERE notes LIKE 'Purchase generated based on Order #3%'
OR notes LIKE 'Purchase generated based on Order #30';

# 12
SELECT submitted_date
FROM purchase_orders
WHERE DATE(submitted_date) LIKE '2006-04-26';

# 13
SELECT supplier_id
FROM purchase_orders
WHERE supplier_id = 1 OR supplier_id = 3;

# 14
SELECT supplier_id
FROM purchase_orders
WHERE supplier_id >= 1 AND supplier_id <= 3;

# 15
SELECT HOUR(submitted_date) AS submitted_hour
FROM purchase_orders;

# 16
SELECT submitted_date 
FROM purchase_orders
WHERE submitted_date 
BETWEEN '2006-01-26 00:00:00' 
AND '2006-03-31 23:59:59'; 

# 17
SELECT id, supplier_id
FROM purchase_orders
WHERE supplier_id IN (1, 3, 5, 7);

# 18
SELECT * 
FROM purchase_orders
WHERE supplier_id = 3
AND status_id = 2;

# 19
SELECT COUNT(*) AS orders_count
FROM orders
WHERE employee_id IN (5, 6)
AND shipper_id = 2;

# 20
INSERT INTO order_details (
	order_id,
	product_id,
    quantity,
    unit_price,
    discount,
    status_id,
    date_allocated,
    purchase_order_id,
    inventory_id )
VALUES (
	69,
    80,
    15.0000,
    15.0000,
    0,
    2,
    NULL,
    NULL,
    129
    );

# 21
INSERT INTO order_details (
	order_id,
	product_id,
    quantity,
    unit_price,
    discount,
    status_id,
    date_allocated,
    purchase_order_id,
    inventory_id )
VALUES (
	69,
    80,
    15.0000,
    15.0000,
    0,
    2,
    NULL,
    NULL,
    129
    ),
    (
	69,
    80,
    15.0000,
    15.0000,
    0,
    2,
    NULL,
    NULL,
    129
    );
    
# 22
UPDATE order_details
SET discount = 15;
    
# 23
UPDATE order_details
SET discount = 30
WHERE unit_price < 10.0000;

# 24
UPDATE order_details
SET discount = 45
WHERE unit_price > 10.0000
AND id BETWEEN 30 AND 40;

# 25
DELETE FROM order_details
WHERE unit_price < 10.0000;

# 26
DELETE FROM order_details
WHERE unit_price > 10.0000;

# 27
TRUNCATE TABLE order_details;

select * from order_details;
DESC purchase_orders;
