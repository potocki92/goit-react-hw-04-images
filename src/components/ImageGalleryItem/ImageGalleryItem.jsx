import React from 'react';
import { ImageGalleryItemContainer, ImageGalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ imageUrl, alt, onClick }) => {
  return (
    <ImageGalleryItemContainer>
      <ImageGalleryItemImage src={imageUrl} alt={alt} onClick={onClick} />
    </ImageGalleryItemContainer>
  );
};

export default ImageGalleryItem;
