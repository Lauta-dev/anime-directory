CREATE TABLE anime(
  -- Valor autoIncremental 
  id INTEGER NOT NULL PRIMARY KEY ASC, 
  anime_name VARCHAR(255) NOT NULL UNIQUE,
  mal_id INTEGER NOT NULL UNIQUE
);
