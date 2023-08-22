import { db } from "../db.js";
import { removeAllItem } from "../sqlFuncions.js";

/**
 * @param {import('express').Request} req - Objeto de solicitud de Express.
 * @param {import('express').Response} res - Objeto de respuesta de Express.
 */
export function removeAll(req, res) {
	const sql = removeAllItem();
	console.log("ser");

	db.run(sql, (e) => {
		if (e) console.log(res.status(404).json(e));

		res.json({
			message: "Elemento eliminado",
		});
	});
}
