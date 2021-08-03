import React, { useState, useEffect } from 'react';
import s from './App.module.css';
import { fetchImgs } from '../Api/Api';
import { CustomLoader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { MoreButton } from './Button/Button';

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [imgs, setImgs] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [imgModal, setImgModal] = useState('');

  useEffect(() => {
    if (inputValue === '') {
      return;
    }
    fetcher();
  }, [inputValue]);

  const fetcher = async () => {
    setLoading(true);
    try {
      const imgsResponse = await fetchImgs(inputValue, currentPage);
      console.log(imgsResponse);
      setImgs([...imgs, ...imgsResponse.data.hits]);
      setCurrentPage(currentPage + 1);
      setLoading(false);

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    } catch (error) {
      setErrors(error.response);
      setLoading(false);
    }
  };

  console.log(imgs);
  const formSubmit = data => {
    setInputValue(data.trim());
    setCurrentPage(1);
    setImgs([]);
  };

  const openModal = largeImageURL => {
    setShowModal(true);
    setImgModal(largeImageURL);
  };

  const closeModal = event => {
    setShowModal(false);
    setImgModal('');
  };

  return (
    <div className={s.App}>
      <Searchbar onSubmit={formSubmit} />
      {errors ? (
        <h2>{errors}</h2>
      ) : (
        <ImageGallery imgs={imgs} onImgClick={openModal} />
      )}
      {loading && <CustomLoader />}
      {imgs.length > 0 && <MoreButton nextPage={fetcher} />}
      {showModal && (
        <Modal closeModal={closeModal}>
          <img src={imgModal} alt="img" />
        </Modal>
      )}
    </div>
  );
};
