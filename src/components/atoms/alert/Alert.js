import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Alert = props => {
  const { children, type = '' } = props;
  return (
    <div
      className={classnames('alert', { [`alert-${type}`]: type })}
      role="alert"
    >
      {children}
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

export default Alert;
