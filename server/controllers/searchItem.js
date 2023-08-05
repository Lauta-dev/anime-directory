import { db } from "../db.js";
import { selectAllForDataBase } from "../sqlFuncions.js";

/**
 * @param {import('express').Request} req - Objeto de solicitud de Express.
 * @param {import('express').Response} res - Objeto de respuesta de Express.
 */
export function searchItem (req, res) {
	const { id } = req.params;


	db.all(selectAllForDataBase(), [id], (error, result) => {
		if (error) throw new Error(error);
		res.json(result);
	});
}