import React from 'react';
import PropTypes from 'prop-types';

const FormGroup = props => {
  const { children, label = '' } = props;
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      {children}
    </div>
  );
};

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
};

export default FormGroup;
