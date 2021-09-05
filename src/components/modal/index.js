import React from 'react';
import PropTypes from 'prop-types';
import ModalStyle from './style';

const Modal = ({ children, isOpen, setIsOpen }) => {
  const onClickModal = ({ target }) => {
    const isInsideModal = target.closest('[data-modal-safe-area="true"]');
    if (!isInsideModal) {
      setIsOpen(false);
    }
  };
  return (
    <ModalStyle isOpen={isOpen} onClick={onClickModal}>
      {children({ 'data-modal-safe-area': 'true' })}
    </ModalStyle>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
