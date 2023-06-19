import styled from 'styled-components';

export const ImageGalleryContainer = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(calc(100% - 30px), 1fr));
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 94px 20px;
  display: grid;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: repeat(auto-fit, minmax(calc(50% - 30px), 1fr));
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(calc(20% - 6px), 1fr));
  }
`;
