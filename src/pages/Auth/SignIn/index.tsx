import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { Input } from '../../../components';
import { signInRequest } from '../../../store/modules/auth/actions';
import {
  Container,
  ImgContainer,
  Content,
  FormContainer,
  Title,
  SubTitle,
  ForgotText,
  CustomLink,
  FormBottom,
  CustomButton,
  CustomForm,
  BgLienar,
} from './styles';
import validator from './validator';

interface formDataProp{
  email: string;
  password: string;
}

interface authProps{
  auth: {
    loading: boolean;
  };
}







const SignIn = () =>  {
  const dispatch = useDispatch();
  const formRef  = React.useRef<any>();
  const loading = useSelector((state : authProps) => state.auth.loading);

  async function onSubmit(data : formDataProp) {
    formRef.current.setErrors({});

    try {
      await validator(data);

      const { email, password } = data;

      dispatch(signInRequest(email, password));
    } catch (error) {

      
      let validationErrors = {}; 
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((error : any) => {

          validationErrors = {
            ...validationErrors,
            [error.path] : error.message,
          }

        });

        formRef.current.setErrors(validationErrors);
      } else {
        toast.error('Ocorreu algum erro, tente novamente mais tarde.');
      }
    }
  }

  return (
    <Container>
      <ImgContainer>
        <BgLienar />
      </ImgContainer>
      <Content>
        <CustomForm ref={formRef} onSubmit={onSubmit}>
          <FormContainer>
            <Title>
              Olá, seja <br /> bem-vindo!
            </Title>
            <SubTitle>Para acessar a plataforma, faça seu login.</SubTitle>
            <Input
              name="email"
              placeholder="user.name@mail.com"
              label="E-MAIL"
            />
            <Input
              name="password"
              type="password"
              placeholder="*******"
              label="SENHA"
            />
            <FormBottom>
              <CustomButton loading={loading}>ENTRAR</CustomButton>
              <ForgotText>
                Esqueceu seu login ou senha? <br />
                Clique <CustomLink to="/signUp">aqui</CustomLink>
              </ForgotText>
            </FormBottom>
          </FormContainer>
        </CustomForm>
      </Content>
    </Container>
  );
}

export default SignIn;
