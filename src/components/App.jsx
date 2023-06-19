import axios from 'axios';
import { useEffect, useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { createPortal } from 'react-dom';

const API_KEY = '34880786-eb7cfd58b108d519b70562252';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    if (query === '') return;

    const fetchImages = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        const newImages = response.data.hits;
        setImages(prevImages => [...prevImages, ...newImages]);
      } catch (error) {
        console.error('Error fetching images', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, currentPage]);

  const handleFormSubmit = query => {
    setQuery(query);
    setImages([]);
    setCurrentPage(1);
  };

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleImageClick = image => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImage('');
    setShowModal(false);
  };
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
      {showModal &&
        createPortal(
          <Modal className={showModal ? 'show' : ''} onClose={handleCloseModal}>
            <img src={selectedImage} alt="" />
          </Modal>,
          document.body
        )}
    </div>
  );
};
