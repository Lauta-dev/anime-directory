import { tipos } from "../../const";


/**
 * @param {string} param1.imageURL URL de la imagen
 * @param {string} param2.type Que tipo de contenido es. Se usara en el "alt" si la imagen no se encuentra
 * @param {string} param3.title Titulo del contenido. Se usara en el "alt" si la imagen no se encuentra
 * */
export function Image({ imageURL, type, title }) {
  return (
    <>
      <picture className='cover'>
        <img src={imageURL} alt={tipos(type, title)} />
      </picture>
    </>
  )
}

