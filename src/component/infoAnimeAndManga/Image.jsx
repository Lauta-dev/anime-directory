import { tipos } from "../../const";
export function Image({ imageURL, type, title, className }) {
	return (
		<>
			<img className={className} src={imageURL} alt={tipos(type, title)} />
		</>
	);
}
