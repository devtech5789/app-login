import React from 'react';
import PropTypes from 'prop-types';
import { Input, InputBlock, ErrorMsg, Label } from './styled';

const InputComponent = ({
  type,
  errorMessage,
  label,
  required,
  onChange,
  name,
}) => {
  return (
    <InputBlock>
      <Label>
        {label}
        {required && <span> *</span>}
      </Label>
      <Input
        name={name}
        type={type}
        onChange={(e) => onChange(e.currentTarget.value, name)}
      />
      <ErrorMsg>{errorMessage}</ErrorMsg>
    </InputBlock>
  );
};

InputComponent.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputComponent;
