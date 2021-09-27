import * as yup from 'yup';

export const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    username: yup.string().min(4).required(),
  });

export const loginValidations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
})

