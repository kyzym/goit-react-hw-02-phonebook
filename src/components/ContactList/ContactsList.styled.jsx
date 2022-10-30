import styled from 'styled-components';

export const Contact = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DelButton = styled.button`
  font-size: 14px;
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
