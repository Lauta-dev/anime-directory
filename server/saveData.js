import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import {
	removeItemFromDBWithID,
	saveData,
	selectAllForDataBase,
} from "./sqlFuncions.js";

const app = express();
const port = 8080;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = new sqlite3.Database("./audit.db", (error) => {
	if (error) throw new Error("Hubo un error al conectarse a la base de datos");
});

app.post("/data/:id", (req, res) => {
	const { id } = req.params;

	db.all(selectAllForDataBase(), [id], (error, result) => {
		if (error) throw new Error(error);

		res.json(result);
	});
});

app.post("/save", (req, res) => {
	const { name, id, type } = req.body;
	const arr = [name, id, type];

	const sql = saveData({ name, id, type });

	db.run(sql, arr, (error, r) => {
		if (error) throw new Error(`Error al ejecutar la consulta SQL ${error}`);
		console.log(r);
	});
});

app.delete("/delete/:id", (req, res) => {
	const { id } = req.params;
	console.log(id);

	const sql = removeItemFromDBWithID({ id });

	db.run(sql, [id], (e, r) => {
		if (e)
			throw new Error(`Error al eliminar el elemento de la base de datos ${e}`);
		console.log(r);
	});
});

app.listen(port, () => console.log(`http://localhost:${port}`));
