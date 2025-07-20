# AWS S3 Setup for DoRight Handyman Images

## S3 Bucket Setup

1. **Create S3 Bucket**:
   ```bash
   aws s3 mb s3://doright-handyman-assets --region us-east-1
   ```

2. **Enable Static Website Hosting**:
   ```bash
   aws s3 website s3://doright-handyman-assets --index-document index.html
   ```

3. **Create Bucket Policy for Public Read Access**:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::doright-handyman-assets/*"
       }
     ]
   }
   ```

   Apply the policy:
   ```bash
   aws s3api put-bucket-policy --bucket doright-handyman-assets --policy file://bucket-policy.json
   ```

## Image Upload

1. **Create Images Directory**:
   ```bash
   mkdir -p images-to-upload
   ```

2. **Upload Images**:
   ```bash
   aws s3 cp images-to-upload/ s3://doright-handyman-assets/images/ --recursive
   ```

## CloudFront Setup (Optional but Recommended)

1. **Create CloudFront Distribution**:
   ```bash
   aws cloudfront create-distribution \
     --origin-domain-name doright-handyman-assets.s3.amazonaws.com \
     --default-root-object index.html
   ```

2. **Update S3 Config**:
   After CloudFront is set up, update the `app/config/s3.ts` file to use the CloudFront URL:

   ```typescript
   export const S3_CONFIG = {
     BUCKET_URL: 'https://d1234abcdef.cloudfront.net',
     REGION: 'us-east-1',
     IMAGE_PATH: 'images/'
   }
   ```

## Required Images

Upload the following images to your S3 bucket:

1. `images/carousel-1.jpg` - Home repair services image
2. `images/carousel-2.jpg` - Electrical work image
3. `images/carousel-3.jpg` - Plumbing services image

## Local Development

For local development, place the same images in:
- `app/assets/images/carousel-1.jpg`
- `app/assets/images/carousel-2.jpg`
- `app/assets/images/carousel-3.jpg`

The Carousel component will automatically fall back to local images if S3 is not accessible.