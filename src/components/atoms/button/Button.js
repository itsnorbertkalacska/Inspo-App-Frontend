import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = props => {
  const { children, color = '', disabled = false, submit = false } = props;
  return (
    <button
      className={classnames('btn', { [`btn-${color}`]: color })}
      disabled={disabled}
      type={submit ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  submit: PropTypes.bool,
};

export default Button;
