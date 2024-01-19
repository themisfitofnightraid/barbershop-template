interface ImageCardProps{
  imgUrl: string;
}
const ImageCard = ({imgUrl}: ImageCardProps) => {
  return (
    <div className='my-7'>
      <img 
        src={`${imgUrl}`}
        className="rounded-sm"
      />
    </div>
  )
}

export default ImageCard