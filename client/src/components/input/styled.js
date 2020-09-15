import styled from 'styled-components';

export const InputBlock = styled.div`
  margin-bottom: 26px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid #d2d0d0;
  -webkit-box-shadow: inset 0 0 0 50px #fff;
  -webkit-text-fill-color: #000;
`;

export const ErrorMsg = styled.p`
  padding: 4px 0 4px 8px;
  font-size: 11px;
  color: red;
`;

export const Label = styled.p`
  margin-bottom: 5px;

  > span {
    color: red;
  }
`;
