import { Dispatch } from 'redux';
import * as actionTypes from 'store/actions/actionTypes';

export const login = (username: string, password: string) => (dispatch: Dispatch<actionTypes.AuthDispatchTypes>) => {
  const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
  ];

  try {
    dispatch({
      type: actionTypes.AUTH_START,
    });

    let user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      localStorage.setItem('userName', user.username);
    } else {
      throw new Error();
    }

    dispatch({
      type: actionTypes.AUTH_SUCCESS,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.AUTH_FAILED,
    });
  }
};

export const logout = () => (dispatch: Dispatch<actionTypes.AuthDispatchTypes>) => {
  localStorage.removeItem('userName');

  dispatch({
    type: actionTypes.AUTH_LOGOUT,
  });
};
