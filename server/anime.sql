CREATE TABLE anime (
  -- Valor autoIncremental 
	id	INTEGER NOT NULL UNIQUE,
	anime_name	VARCHAR(255) NOT NULL UNIQUE,
	mal_id	INTEGER NOT NULL UNIQUE,
	type	VARCHAR(255) NOT NULL,
	date_created datetime default current_timestamp,
	PRIMARY KEY(id)
);