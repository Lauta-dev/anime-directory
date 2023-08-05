import express from "express";
import cors from "cors";

import { PORT } from "./port.js";
import { endPoint } from "./prefix.js";
import { searchItem } from "./controllers/searchItem.js";
import { returnAllItem } from "./controllers/returnAllItem.js";
import { removeItem } from "./controllers/removeItem.js";
import { saveItem } from "./controllers/saveItem.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Buscar un elemento
app.post(`${endPoint}/:id`, searchItem);
app.post('/all', returnAllItem)

// Guardar un elemento
app.post(endPoint, saveItem);

// Eliminar un elemento
app.delete(`${endPoint}/:id`, removeItem);

// Si no se encontro la ruta
app.use((req, res) => res.status(404).json({ message: 'URL NOT FOUNT' }))

// Iniciar BACKEND
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
