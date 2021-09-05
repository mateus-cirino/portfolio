import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 100;
    ${({ isOpen }) => (isOpen
    ? `opacity: 1;
    pointer-events: all;`
    : `opacity: 0;
    pointer-events: none;`)}
`;

export default ModalStyle;

ModalStyle.propTypes = {
  isOpen: PropTypes.objectOf(PropTypes.object).isRequired,
};
