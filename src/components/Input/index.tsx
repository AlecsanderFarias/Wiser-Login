import React, { useEffect, useRef,InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import { Container, CustomInput, Label, ErrorText } from './styles';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}


export default function Input({ name, label,...rest }: InputProps) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  console.log(error);

  return (
    <Container>
      <Label>{label}</Label>
      <CustomInput
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
        error={error !== undefined}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
}
