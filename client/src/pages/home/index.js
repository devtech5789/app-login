import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { get, post } from '../../api/calls';
import { PATH } from '../../api/path';
import { CONST } from '../../constants';
import { storageGet, storageRemove } from '../../utils/local-storage';
import ButtonComponent from '../../components/button';
import { Container, ButtonBlock, CodeBlock } from './styled';

export default () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const username = storageGet(CONST.STORAGE_KEY);

  const handleFetch = async () => {
    try {
      const { data } = await get(PATH.ORDERS);
      setData((prev) => [...prev, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignout = async () => {
    try {
      await post(`${PATH.AUTH}/${PATH.SIGNOUT}`);
      storageRemove(CONST.STORAGE_KEY);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1>Welcome, {username}</h1>
      <ButtonBlock>
        <ButtonComponent
          type="button"
          text="Fetch private data"
          onClick={handleFetch}
        />
        <ButtonComponent type="button" text="Logout" onClick={handleSignout} />
      </ButtonBlock>
      <CodeBlock>
        <code>{data.length ? JSON.stringify(data, 0, 2) : null}</code>
      </CodeBlock>
    </Container>
  );
};
