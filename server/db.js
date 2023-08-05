import sqlite3 from "sqlite3";
sqlite3.verbose()

export const db = new sqlite3.Database("./audit.db", (error) => {
	if (error) throw new Error("Hubo un error al conectarse a la base de datos");
});