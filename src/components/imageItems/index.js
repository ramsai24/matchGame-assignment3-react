import './index.css'

const ImageItems = props => {
  const {imageItem, thumbnailSelect} = props
  const {thumbnailUrl, id} = imageItem

  const thumbnailId = () => {
    thumbnailSelect(id)
  }

  return (
    <li>
      <button type="button" className="thumbnail-btn" onClick={thumbnailId}>
        <img className="thumbnailImg" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItems
