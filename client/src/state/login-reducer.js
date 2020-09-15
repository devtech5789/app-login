import { ActionTypes } from './action-types';

export const loginReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.FIELD: {
      return {
        ...state,
        serverError: '',
        [action.field]: action.value,
        validationError: {
          ...state.validationError,
          [action.field]: '',
        },
      };
    }
    case ActionTypes.LOGIN: {
      return {
        ...state,
        isLoading: true,
        validationError: {},
      };
    }
    case ActionTypes.SUCCESS: {
      return {
        ...state,
        isLoading: false,
        username: action.data.username,
      };
    }
    case ActionTypes.CLIENT_ERROR: {
      return {
        ...state,
        validationError: action.errors,
      };
    }
    case ActionTypes.SERVER_ERROR: {
      return {
        ...state,
        isLoading: false,
        serverError: action.error,
      };
    }
    default:
      break;
  }

  return state;
};
