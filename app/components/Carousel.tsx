import { useState, useEffect } from 'react'
import { CAROUSEL_IMAGES } from '../config/s3'

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0)
  const [useLocalImages, setUseLocalImages] = useState(false)
  
  // Check if S3 images are accessible, otherwise fall back to local images
  useEffect(() => {
    const checkS3Access = async () => {
      try {
        const response = await fetch(CAROUSEL_IMAGES[0].src, { method: 'HEAD' })
        setUseLocalImages(!response.ok)
      } catch (error) {
        setUseLocalImages(true)
      }
    }
    
    checkS3Access()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-96 w-full overflow-hidden">
      {CAROUSEL_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={useLocalImages ? image.localSrc : image.src}
            alt={image.alt}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </section>
  )
}