CREATE DATABASE IF NOT EXISTS db_bkap_test;

USE db_bkap_test;

CREATE TABLE IF NOT EXISTS province (
	id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(100) NOT null
);

CREATE TABLE IF NOT EXISTS people (
	id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(100) NOT null,
    birthday date,
    avatar varchar(255),
    province_id int,
    FOREIGN KEY (province_id) REFERENCES province(id)
);

INSERT INTO province(name)
VALUES
("Ha Noi"),
("Hai Phong"),
("Hai Duong"),
("Nghe An"),
("Ha Tinh")