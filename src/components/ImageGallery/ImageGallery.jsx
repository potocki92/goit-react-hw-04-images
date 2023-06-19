import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { ImageGalleryContainer } from './ImageGallery.styled';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ImageGalleryContainer>
      {images.map(
        image => (
          (
            <ImageGalleryItem
              key={image.id}
              imageUrl={image.webformatURL}
              alt={image.tags}
              onClick={() => onImageClick(image.largeImageURL)}
            />
          )
        )
      )}
    </ImageGalleryContainer>
  );
};

export default ImageGallery;
