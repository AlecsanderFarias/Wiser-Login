import styled from 'styled-components';

interface InputStyleProps {
  error: string | boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-bottom: 17px;
`;

export const Label = styled.p`
  width: 100%;
  margin-bottom: 8px;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;

  color: #383e71;
`;

export const CustomInput = styled.input<InputStyleProps>`
  width: 100%;
  border: 1px solid ${(props) => (props.error ? '#FF377F' : '#989fdb')};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 17px;
  background: none;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  color: #383e71;
`;

export const ErrorText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 16px;
  color: #ff377f;
`;
