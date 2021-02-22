import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bg from '../../../assets/bgLogin.png';

import { Button } from '../../../components';
import { Form } from '@unform/web';

export const Container = styled.div`
  width: 100%;

  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 767px) {
    padding-bottom: 200px;
  }
`;

export const ImgContainer = styled.div`
  width: 56%;
  height: 100%;

  background: ${`url(${bg})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 1024px) {
    width: 42%;
  }

  @media (max-width: 767px) {
    width: 100%;
    position: absolute;
  }
`;

export const BgLienar = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
`;

export const Content = styled.div`
  flex: 1;
  height: 100%;
  background-color: #faf5ff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 112px;

  @media (max-width: 767px) {
    z-index: 1;
    height: fit-content;
    padding: 24px 28px;
    border-radius: 8px;
    margin: 139px 33px 33px 33px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  margin-bottom: 16px;
  color: #383e71;

  @media (max-width: 767px) {
    font-size: 24px;
    width: 100%;
    text-align: center;
    color: #383e71;
  }
`;

export const SubTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #989fdb;
  margin-bottom: 43px;

  @media (max-width: 767px) {
    font-size: 12px;
    width: 100%;
    text-align: center;
  }
`;

export const ForgotText = styled.p`
  margin-top: 32px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  text-align: center;

  color: #989fdb;

  @media (max-width: 767px) {
    color: #fff;
    margin-top: 24px;
  }
`;

export const CustomLink = styled(Link)`
  color: #9d25b0;
  border-bottom: 1px solid #9d25b0;

  @media (max-width: 767px) {
    color: #fff;
    border-bottom: 1px solid #fff;
  }
`;

export const FormBottom = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media (max-width: 767px) {
    height: 50px;
    position: relative;
    bottom: -50px;
  }
`;

export const CustomForm = styled(Form)`
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const CustomButton = styled(Button)`
  @media (min-width: 767px) {
    width: 100%;
  }
`;
