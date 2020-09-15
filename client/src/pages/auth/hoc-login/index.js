import React, { useReducer } from 'react';
import { post } from '../../../api/calls';
import { storageSet } from '../../../utils/local-storage';
import { CONST } from '../../../constants';
import { PATH } from '../../../api/path';
import { ActionTypes } from '../../../state/action-types';
import { loginReducer } from '../../../state/login-reducer';
import { validateCreds } from '../../../utils/validate';
import { initialState } from '../../../state/initial-state';
import { useHistory } from 'react-router-dom';

export default (BaseComponent) => (props) => {
  const { path } = props.match;
  const history = useHistory();
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { FIELD, LOGIN, SUCCESS, SERVER_ERROR, CLIENT_ERROR } = ActionTypes;
  const { isLoading, serverError, validationError } = state;
  let { username, password } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateCreds(username, password);
    if (Object.keys(errors).length) {
      dispatch({ type: CLIENT_ERROR, errors });
      return;
    }
    dispatch({ type: LOGIN });

    try {
      const { data } = await post(`${PATH.AUTH}${path}`, {
        username,
        password,
      });
      dispatch({ type: SUCCESS, data });
      storageSet(CONST.STORAGE_KEY, data.username);
      history.push('/');
    } catch (error) {
      dispatch({ type: SERVER_ERROR, error: error.map((e) => e.message) });
    }
  };

  const handleChange = (value, field) =>
    dispatch({ type: FIELD, field, value });

  return (
    <BaseComponent
      {...props}
      data={{
        serverError,
        handleChange,
        validationError,
        handleSubmit,
        isLoading,
      }}
    />
  );
};
