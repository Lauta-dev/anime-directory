/**
 *
 * @param  {...string} data Sera las tablas que se pasaran a la base de datos, por defecto es '*'
 */
export const selectAllForDataBase = (id) =>
	"SELECT * FROM anime WHERE mal_id = ?;";

/**
 * @param {string} name El nombre del elemento al guardar
 * @param {number} id el id del elemento
 * @param {string} type en que categoria es el elemento
 */
export const saveData = (name, id, type) =>
	"INSERT INTO anime (anime_name, mal_id, type) VALUES (?, ?, ?);";

/**
 *
 * @param {string} columnName Nombre de la columna a buscar
 * @param {number} id id del manga/anime/pelicula que se utilizara para buscar conincidencias de la base de datos
 */
export const selectAllForDataBaseWithWhere = ({ id }) =>
	"SELECT mal_id FROM anime WHERE mal_id = ?;";

/**
 *
 * @param {number} id id el cual se identifica en la tabla, para posterio eliminal el elemento que coincida con el id
 * @returns
 */
export const removeItemFromDBWithID = ({ id }) =>
	"DELETE FROM anime WHERE mal_id = ?";
