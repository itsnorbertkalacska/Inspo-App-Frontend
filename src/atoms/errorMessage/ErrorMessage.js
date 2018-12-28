import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';

import './ErrorMessage.css';

const MyErrorMessage = props => {
  const { name } = props;
  return (
    <div className="invalid-feedback my-invalid-feedback">
      <ErrorMessage name={name} />
    </div>
  );
};

MyErrorMessage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MyErrorMessage;
