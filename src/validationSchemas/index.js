import * as Yup from 'yup';

const usernameSchema = Yup.string()
  .max(10, 'Too Long!')
  .required('Required');

const passwordSchema = Yup.string().required('Required');

const loginFormValidationSchema = Yup.object().shape({
  username: usernameSchema,
  password: passwordSchema,
});

export { loginFormValidationSchema };
