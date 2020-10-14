
create database eventdb;


use eventdb;

#테이블 생성 테이블명/컬럼명/자료형/제약조건
CREATE TABLE entry_entry
(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    datetime DATETIME
);

# 컬럼 추가 
ALTER TABLE entry_entry ADD no_id INT;
ALTER TABLE entry_entry ADD score INT NOT NULL;


show databases;

show tables;