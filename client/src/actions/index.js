import axios from 'axios';
import { FETCH_USER, SIGN_OUT } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res });
};

// export const signout = () => dispatch => {
//   const res = axios.get('/api/logout');

//   dispatch({ type: SIGN_OUT, payload: res });
// };