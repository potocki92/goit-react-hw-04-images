import styled from 'styled-components';

export const ImageGalleryItemContainer = styled.div`
  width: 100%;
  height: 100%;
  transition: width transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.14),
    0 2px 1px rgba(0, 0, 0, 0.2);
`;

export const ImageGalleryItemImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;