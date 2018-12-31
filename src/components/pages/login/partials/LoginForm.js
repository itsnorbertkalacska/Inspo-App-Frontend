import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, withFormik } from 'formik';
import { compose } from 'recompose';

import { Alert, Button, ErrorMessage, FormGroup, Input } from '../../../atoms';
import { loginFormValidationSchema } from '../../../../validationSchemas';

import * as UserActions from '../../../../actions/userActions';

const LoginForm = props => {
  return (
    <Form>
      {props.error && <Alert type="danger">{props.error}</Alert>}

      <FormGroup label="Username">
        <Input name="username" />
        <ErrorMessage name="username" />
      </FormGroup>

      <FormGroup label="Password">
        <Input type="password" name="password" />
        <ErrorMessage name="password" />
      </FormGroup>

      <Button color="primary" submit disabled={props.loading}>
        Sign in
      </Button>
    </Form>
  );
};

LoginForm.propTypes = {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  loading: PropTypes.bool,
  login: PropTypes.func.isRequired,
};

const enhance = compose(
  connect(
    ({
      auth: {
        login: { error, loading, login },
      },
    }) => ({ error, loading, login }),
    dispatch => ({
      login: user => dispatch(UserActions.login(user)),
    })
  ),
  withFormik({
    handleSubmit: (values, { props }) => {
      props.login(values);
    },
    displayName: 'LoginForm',
    mapPropsToValues: () => ({
      username: '',
      password: '',
    }),
    validationSchema: loginFormValidationSchema,
  })
);

export default enhance(LoginForm);
