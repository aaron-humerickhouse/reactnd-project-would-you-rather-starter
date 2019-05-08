import { showLoading, hideLoading } from 'react-redux-loading';
import { saveQuestion, saveQuestionAnswer } from '../services/api';
import { addAnswer, removeAnswer } from './users';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const REMOVE_ANSWER_QUESTION = 'REMOVE_ANSWER_QUESTION';

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {
  return dispatch => saveQuestion(question)
    .then(() => dispatch(addQuestion(question)));
}

function answerQuestion(question, option, authedUser) {
  return {
    type: ANSWER_QUESTION,
    question,
    option,
    authedUser,
  };
}

function removeAnswerQuestion(question, option, authedUser) {
  return {
    type: REMOVE_ANSWER_QUESTION,
    question,
    option,
    authedUser,
  };
}

export function handleAnswerQuestion(question, option, authedUser) {
  return (dispatch) => {
    dispatch(answerQuestion(question, option, authedUser));
    dispatch(addAnswer(question, option, authedUser));
    dispatch(showLoading());

    return saveQuestionAnswer({
      authedUser,
      qid: question.id,
      answer: option,
    }).then(() => {
      dispatch(hideLoading());
    }).catch((ex) => {
      dispatch(hideLoading());
      window.console.warn("Error in saving a question's answer: ", ex);
      dispatch(removeAnswerQuestion(question, option, authedUser));
      dispatch(removeAnswer(question, authedUser));
      alert('The was an error answering the question. Try again.');
    });
  };
}
