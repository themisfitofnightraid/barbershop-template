import { SmallGalleryPics } from '@/constants/SmallGalleryPics'
import ImageCard from './ImageCard'

const GalleryPics = () => {
  return (
    <div>
        <div className='columns-2 md:columns-3 lg:columns-4 gap-7'>
            {
                SmallGalleryPics.map((image) => (
                    <ImageCard 
                      key={image.id} 
                      imgUrl={image.imgUrl}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default GalleryPics