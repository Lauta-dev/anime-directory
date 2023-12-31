import { db } from "../db.js";
import { selectAll } from "../sqlFuncions.js";

/**
 * @param {import('express').Request} req - Objeto de solicitud de Express.
 * @param {import('express').Response} res - Objeto de respuesta de Express.
 */
export function returnAllItem(req, res) {
	const sql = selectAll().all;

	db.all(sql, (err, row) => {
		if (err) res.json(err);
		res.json(row);
	});
}
