import {
  Backdrop,
  ModalWrapper,
  ButtonClose,
  ModalContainer,
} from './Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWrapper>
        <ButtonClose onClick={handleBackdropClick}>&#10005;</ButtonClose>
        <ModalContainer>{children}</ModalContainer>
      </ModalWrapper>
    </Backdrop>,
    modalRoot
  );
};
