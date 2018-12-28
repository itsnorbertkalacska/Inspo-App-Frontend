import React from 'react';
import PropTypes from 'prop-types';

const Title = props => {
  const { className = '', title } = props;
  return <h1 className={className}>{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Title;
