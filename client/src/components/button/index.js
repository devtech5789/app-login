import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styled';

const ButtonComponent = ({ type, text, onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      {text}
    </Button>
  );
};

ButtonComponent.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ButtonComponent;
