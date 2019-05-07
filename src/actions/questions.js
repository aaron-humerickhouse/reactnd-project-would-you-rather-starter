import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestion, saveQuestionAnswer } from './../services/api'
import { addAnswer } from './users'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(question) {
  return(dispatch) => {

    dispatch(showLoading())
    return saveQuestion(question)
      .then(() => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

function answerQuestion(question, option, authedUser) {
  return {
    type: ANSWER_QUESTION,
    question,
    option,
    authedUser
  }
}

export function handleAnswerQuestion(question, option, authedUser) {
  return(dispatch) => {
    dispatch(showLoading())
      return saveQuestionAnswer({
        authedUser: authedUser,
        qid: question.id,
        answer: option
      })
        .then(() => dispatch(answerQuestion(question, option, authedUser)))
        .then(() =>dispatch(addAnswer(question, option, authedUser)))
        .then(() => dispatch(hideLoading()))
  }
}
