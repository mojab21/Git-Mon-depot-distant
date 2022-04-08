/******************************Ex1********************************/
DROP DATABASE IF EXISTS clicom;

CREATE DATABASE clicom;

USE clicom;

CREATE TABLE CLIENT ( 

cli_num INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
cli_nom VARCHAR(50) NOT NULL,
cli_adresse VARCHAR(30) NOT NULL,
cli_tel VARCHAR(30) NOT NULL 

);

CREATE TABLE commande (

com_num INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
com_date DATETIME NOT NULL, 
com_obs varchar(50) NOT NULL,
cli_num INT NOT NULL, 
FOREIGN KEY (cli_num) REFERENCES CLIENT (cli_num)

);

CREATE TABLE produit ( 

pro_num INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
pro_libelle VARCHAR(50) NOT NULL, 
pro_description VARCHAR(50) NOT NULL

);

CREATE TABLE  est_compose ( 

est_qte INT NOT NULL,
com_num INT NOT NULL, 
pro_num INT NOT NULL, 
FOREIGN KEY (com_num) REFERENCES commande (com_num),
FOREIGN KEY (pro_num) REFERENCES produit (pro_num)

); 

/******************************Ex2********************************/
SELECT productname AS "produit", unitprice AS "prix" FROM products 
WHERE supplierid=1
/******************************Ex3********************************/
SELECT companyname, COUNT(*) AS `Nbre produits`
FROM products
JOIN suppliers ON suppliers.supplierid = products.supplierid
WHERE country = "France"
GROUP BY companyname
ORDER BY `Nbre produits` DESC
/******************************Ex4********************************/
SELECT distinct companyname AS "client", COUNT(*) AS "nbre commandes"
FROM customers
JOIN orders on orders.CustomerID = customers.CustomerID
WHERE country="france"
GROUP BY companyname
HAVING COUNT(*) > 10
ORDER BY `nbre commandes`
/******************************Ex5********************************/
SELECT CompanyName AS "client", SUM(UnitPrice) AS "CA", country AS "pays"
FROM customers
JOIN orders ON orders.CustomerID = customers.CustomerID
JOIN order_details ON order_details.OrderID = orders.OrderID
GROUP BY companyname
ORDER BY `CA`
/******************************Ex6********************************/
SELECT DISTINCT customers.Country AS "pays"
FROM customers
JOIN orders ON orders.CustomerID = customers.CustomerID
JOIN order_details ON order_details.OrderID = orders.OrderID
JOIN products ON products.ProductID = order_details.ProductID
JOIN suppliers ON suppliers.SupplierID = products.SupplierID
WHERE suppliers.CompanyName LIKE 'Exotic Liquids'
/******************************Ex7********************************/
SELECT SUM(UnitPrice) AS "Montant Ventes 1997"
FROM order_details
JOIN orders
ON orders.OrderID = order_details.OrderID
WHERE year(OrderDate) = 1997
/******************************Ex8********************************/
SELECT MONTH(OrderDate) AS "Mois 1997", SUM(UnitPrice) AS "Montan Ventes"
FROM order_details
JOIN orders
ON orders.OrderID = order_details.OrderID
WHERE YEAR(OrderDate) = 1997
GROUP BY "Mois 1997"
/******************************Ex9********************************/
SELECT ROUND(AVG(DATEDIFF(ShippedDate, OrderDate))) AS "Délai moyen de livraison"
FROM orders

