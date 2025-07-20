// S3 bucket configuration
export const S3_CONFIG = {
  BUCKET_URL: 'https://doright-handyman-assets.s3.amazonaws.com',
  REGION: 'us-east-1',
  IMAGE_PATH: 'images/'
}

// Carousel images
export const CAROUSEL_IMAGES = [
  {
    src: `${S3_CONFIG.BUCKET_URL}/${S3_CONFIG.IMAGE_PATH}carousel-1.jpg`,
    alt: 'Home repair services',
    localSrc: 'app/assets/images/13fcf2a0-648a-4705-a542-f5a761499213.jpg' // Fallback for local development
  },
  {
    src: `${S3_CONFIG.BUCKET_URL}/${S3_CONFIG.IMAGE_PATH}carousel-2.jpg`,
    alt: 'Electrical work',
    localSrc: 'app/assets/images/20240612_102218.jpg'
  },
  {
    src: `${S3_CONFIG.BUCKET_URL}/${S3_CONFIG.IMAGE_PATH}carousel-3.jpg`,
    alt: 'Plumbing services',
    localSrc: 'app/assets/images/20240710_132452.jpg'
  }
]