CREATE DATABASE burgersDB;
USE burgersDB;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(100) NOT NULL,
devoured BOOLEAN DEFAULT FALSE,
date TIMESTAMP,
PRIMARY KEY (id)
);
