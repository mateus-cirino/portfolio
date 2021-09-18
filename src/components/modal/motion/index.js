import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const ModalMotion = ({ isOpen, children }) => {
  const variants = {
    open: {
      x: '0%',
    },
    close: {
      x: '100%',
    },
  };

  return (
    <motion.div
      style={{
        display: 'flex',
        flex: 1,
      }}
      variants={variants}
      transition={{
        duration: 0.3,
      }}
      animate={isOpen ? 'open' : 'close'}
    >
      {children}
    </motion.div>
  );
};

ModalMotion.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalMotion;
