CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100),
    devoured TINYINT(1) NOT NULL,
    date TIMESTAMP,
    PRIMARY KEY (id)
);
