import * as yup from 'yup';

export const contactValidations = yup.object().shape({
  email: yup
    .string()
    .email({
      field: 'email',
      message: 'Email format is invalid',
    })
    .max(254, {
      field: 'email',
      message: 'Email must not exceed 254 characters',
    }),
  name: yup
    .string()
    .min(5, {
      field: 'name',
      message: 'Name must be at least 5 characters',
    })
    .max(100, {
      field: 'name',
      message: 'Name must not exceed 100 characters',
    }),
  message: yup
    .string()
    .min(10, {
      field: 'message',
      message: 'Message must be at least 10 characters',
    })
    .max(250, {
      field: 'message',
      message: 'Message must not exceed 250 characters',
    }),
});