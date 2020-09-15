import React from 'react';
import InputComponent from '../../../components/input';
import ButtonComponent from '../../../components/button';
import LinkComponent from '../../../components/link';
import { FormBlock, FormHeader, FormBody, Form } from './styled';

export default ({
  data: { serverError, handleChange, validationError, handleSubmit, isLoading },
}) => {
  return (
    <FormBlock>
      <FormHeader>
        <h1>Signin</h1>
      </FormHeader>
      <FormBody>
        <Form onSubmit={handleSubmit}>
          <InputComponent
            name="username"
            type="text"
            label="Username"
            required={true}
            onChange={handleChange}
            errorMessage={validationError.username || serverError}
          />
          <InputComponent
            name="password"
            type="password"
            label="Password"
            required={true}
            onChange={handleChange}
            errorMessage={validationError.password || serverError}
          />
          <ButtonComponent
            type="submit"
            text={isLoading ? 'Signin in ...' : 'Submit'}
          />
        </Form>
        <LinkComponent path="signup" text="I don't have an account yet" />
      </FormBody>
    </FormBlock>
  );
};
