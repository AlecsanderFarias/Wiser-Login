import React , {ButtonHTMLAttributes}from 'react';

import { ContainerButton  } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  children: React.FC | string;
}


const Button : React.FC<ButtonProps>  = ({ loading = false, children, ...rest }) =>  {
  return (
    <ContainerButton {...rest}>
      {loading ? 'CARREGANDO' : children}
    </ContainerButton>
  );
}

export default Button;
