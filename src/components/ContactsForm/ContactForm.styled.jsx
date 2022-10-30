import styled from 'styled-components';

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
  display: flex;
  align-items: flex-end;
  gap: 6px;
  margin-bottom: 10px;
`;

export const FormTag = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 335px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-weight: 500;
`;

export const Input = styled.input`
  border-radius: 4px;
  width: 250px;
  height: 20px;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 8px;
  border-radius: 20px;
  border: none;

  &:hover,
  focus {
    outline: 1.5px solid black;
  }
  &:active {
    background-color: #cdcdcd;
  }
`;
