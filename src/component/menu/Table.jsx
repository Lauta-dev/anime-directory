import { Link } from "wouter";

const ListItems = ({
	data,
	changeTitle,
	hadleType,
	btn,
	removeFromDataBase,
	removeAllItems,
}) => {
	return (
		<>
			{data?.length && (
				<button type="button" onClick={removeAllItems}>
					Remove All
				</button>
			)}

			<table width={"100%"}>
				<thead>
					<tr>
						<th onClick={changeTitle}>Title</th>
						<th onClick={hadleType}>Type</th>
						<th>Remove</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((data) => {
						const title = data.title;
						const isAnime =
							data.type === "TV" ? "anime" : data.type.toLowerCase();

						return (
							<tr key={data.id}>
								<td className="row title">
									<Link to={`/${isAnime}/id/${data.mal_id}`}>{title}</Link>
								</td>
								<td className="row">{data.type}</td>
								<td className="row">
									{btn ? (
										<button
											disabled
											onClick={() => removeFromDataBase({ id: data.mal_id })}
										>
											Remove
										</button>
									) : (
										<button
											onClick={() => removeFromDataBase({ id: data.mal_id })}
										>
											Remove
										</button>
									)}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};
export default ListItems;
