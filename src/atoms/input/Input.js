import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const Input = props => {
  const { name, disabled = false, placeholder = '', type = 'text' } = props;
  return (
    <Field
      className="form-control"
      type={type}
      name={name}
      placeholder={placeholder}
      readOnly={disabled}
      {...props}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
