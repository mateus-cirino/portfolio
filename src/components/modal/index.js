import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import ModalStyle from './style';
import { HiddenScrollGlobalStyle } from '../../theme';
import closeIcon from '../../../public/images/close-icon.svg';
import ButtonStyle from '../button/style';

const Modal = ({ children, isOpen, setIsOpen }) => {
  const closeModal = () => setIsOpen(false);

  const onClickModal = ({ target }) => {
    const isInsideModal = target.closest('[data-modal-safe-area="true"]');
    if (!isInsideModal) {
      closeModal();
    }
  };
  const CloseButton = (
    <ButtonStyle type="button" ghost display="block" marginLeft="auto" onClick={closeModal}>
      <Image
        src={closeIcon}
        alt="Icone para fechar o modal"
      />
    </ButtonStyle>
  );
  return (
    <ModalStyle isOpen={isOpen} onClick={onClickModal}>
      {isOpen && <HiddenScrollGlobalStyle />}
      {children({
        'data-modal-safe-area': 'true',
        CloseButton,
      })}
    </ModalStyle>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
