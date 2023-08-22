export const selectAllForDataBase = (id) =>
	"SELECT * FROM anime WHERE mal_id = ?;";

export const selectAll = () => {
	const base = "SELECT * FROM anime";

	const orderBy = (option, column) => {
		return `${base} ORDER BY ${column} ${option}`;
	};

	const a = {
		all: base,
		/**
		 * Método para agregar una cláusula ORDER BY a la consulta.
		 * @param {string} option - El tipo de ordenamiento (ASC o DESC).
		 * @param {string} column - Columna que se quiere usar para ordenar los elementos
		 * @returns {string} - Consulta SQL completa con cláusula ORDER BY.
		 */
		orderBy: ({ option, column }) => orderBy(option, column),
	};

	return a;
};

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
