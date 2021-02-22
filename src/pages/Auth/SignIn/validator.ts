/* eslint-disable import/no-anonymous-default-export */
import * as Yup from 'yup';

interface dataProps {
  email: string,
  password: string
}


export default async (data : dataProps) => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required('O E-mail é obrigatório.')
      .email('Digite um e-mail válido;'),
    password: Yup.string().required('A senha é obrigatória.'),
  });

  await schema.validate(data, { abortEarly: false });
};
