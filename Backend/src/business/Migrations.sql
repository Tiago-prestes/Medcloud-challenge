CREATE TABLE IF NOT EXISTS medcloud_users(
  id VARCHAR(50) NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  address VARCHAR(150) NOT NULL,
  birthdate date
);