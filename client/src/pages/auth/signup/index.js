import React from 'react';
import InputComponent from '../../../components/input';
import ButtonComponent from '../../../components/button';
import LinkComponent from '../../../components/link';
import { FormBlock, FormHeader, FormBody, Form } from '../signin/styled';

export default ({
  data: { handleChange, validationError, handleSubmit, isLoading, serverError },
}) => {
  return (
    <FormBlock>
      <FormHeader>
        <h1>Signup</h1>
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
            errorMessage={validationError.password}
          />
          <ButtonComponent
            type="submit"
            text={isLoading ? 'Signin up ...' : 'Submit'}
          />
        </Form>
        <LinkComponent path="signin" text="I'm already registered" />
      </FormBody>
    </FormBlock>
  );
};
