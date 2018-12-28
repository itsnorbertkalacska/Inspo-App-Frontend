import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, withFormik } from 'formik';

import { Alert, Button, ErrorMessage, FormGroup, Input } from '../../../atoms';
import { loginFormValidationSchema } from '../../../validationSchemas';

import * as UserActions from '../../../actions/userActions';

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
  error: PropTypes.bool,
  loading: PropTypes.bool,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.auth.login;
const mapDispatchToProps = dispatch => ({
  login: user => dispatch(UserActions.login(user)),
});

const EnchancedLoginForm = withFormik({
  handleSubmit: (values, { props }) => {
    props.login(values);
  },
  displayName: 'LoginForm',
  mapPropsToValues: () => ({
    username: '',
    password: '',
  }),
  validationSchema: loginFormValidationSchema,
})(LoginForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnchancedLoginForm);
