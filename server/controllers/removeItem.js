import { db } from "../db.js";
import { removeItemFromDBWithID } from "../sqlFuncions.js";

/**
 * @param {import('express').Request} req - Objeto de solicitud de Express.
 * @param {import('express').Response} res - Objeto de respuesta de Express.
 */
export function removeItem(req, res) {
	const { id } = req.params;
	const idIsNumber = parseInt(Object.values(id));
	if (isNaN(idIsNumber)) return res.json({ message: "No es un numero" });

	const sql = removeItemFromDBWithID({ id });

	db.run(sql, [id], (e) => {
		if (e) res.status(404).json(e);

		res.json({
			message: "Elemento eliminado",
		});
	});
}
