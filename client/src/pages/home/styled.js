import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  bottom: 10%;
  width: 20%;

  > h1 {
    text-align: center;
  }
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px 0 40px;
`;

export const CodeBlock = styled.div`
  overflow-y: auto;
  height: 200px;
`;
