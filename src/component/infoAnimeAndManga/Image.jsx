import { tipos } from "../../const";
import '../css/image.css'

export function Image({ imageURL, type, title}) {
	return (
		<>
			<img
        className='imageCover'
        src={imageURL}
        alt={tipos(type, title)}
      />
		</>
	);
}
