import styled from 'styled-components';

export const FormBlock = styled.div`
  flex-basis: 600px;
  max-width: 600px;
  height: max-content;
  position: relative;
  bottom: 10%;
  border: 2px solid #d2d0d0;
  border-radius: 6px;
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5em;

  h1 {
    font-size: 1.5em;
    text-align: left;
  }
`;

export const FormBody = styled.div`
  padding: 1em 2em 3em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
