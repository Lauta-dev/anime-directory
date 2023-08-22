import { db } from "../db.js";
import { selectAll } from "../sqlFuncions.js";

/**
 * @param {import('express').Request} req - Objeto de solicitud de Express.
 * @param {import('express').Response} res - Objeto de respuesta de Express.
 */
export function orderBy(req, res) {
	const { data } = req.body;
	const sql = selectAll().orderBy({ option: data, column: "mal_id" });

	db.all(sql, (err, row) => {
		if (err) res.json(err);

		res.json(row);
	});
}
