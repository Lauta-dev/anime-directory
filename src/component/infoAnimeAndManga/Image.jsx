import { tipos } from '../../const'
export function Image ({ imageURL, type, title }) {
  return (
    <>
      <picture className='cover'>
        <img className='image' src={imageURL} alt={tipos(type, title)} />
      </picture>
    </>
  )
}
