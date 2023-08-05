import { db } from "../db.js";
import { validateData } from "../scheme.js";
import { saveData } from "../sqlFuncions.js";

/**
 * @param {import('express').Request} req - Objeto de solicitud de Express.
 * @param {import('express').Response} res - Objeto de respuesta de Express.
 */
export function saveItem (req, res) {
	const { name, id, type } = req.body;
	const result = validateData(req.body)

	if (result.error) return res.status(201).json(result)

	const sql = saveData({...req.body});

	const arr = [name, id, type]

	db.run(sql, arr, (error) => {
		if (error) res.json({ error, message: 'El elemeto ya existe' })
		res.json({
			messaje: "Elemento agregado"
		})
	});
}