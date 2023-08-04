import { PORT } from "./port.js";

export const endPoint = '/recurso'

export const localHost = `http://localhost:${PORT}${endPoint}`;
export const saveData = `${localHost}/save`
export const removeData = `${localHost}`

