
USE DATABASE practice;

CREATE TABLE tips(
    id Int AUTO_INCREMENT NOT NULL,
    content VARCHAR(50),
    author VARCHAR(50),
    rating Int,
    PRIMARY KEY (id)
)

