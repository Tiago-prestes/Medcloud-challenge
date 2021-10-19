   CREATE TABLE IF NOT EXISTS User(
            id VARCHAR(50) NOT NULL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            email VARCHAR(50) NOT NULL UNIQUE,
            age INT NULL
        );