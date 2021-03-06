import { showLoading, hideLoading } from 'react-redux-loading';
import { getInitialData } from '../services/api';
import { getUsers } from './users';
import { getQuestions } from './questions';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(getUsers(users));
        dispatch(getQuestions(questions));
        dispatch(hideLoading());
      });
  };
}
