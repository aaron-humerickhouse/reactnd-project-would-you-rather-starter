export const GET_USERS = 'GET_USERS'
export const ADD_ANSWER = 'ADD_ANSWER'
export const REMOVE_ANSWER = 'REMOVE_ANSWER'

export function getUsers(users) {
  return {
    type: GET_USERS,
    users
  }
}

export function addAnswer(question, option, authedUser) {
  return {
    type: ADD_ANSWER,
    question,
    option,
    authedUser
  }
}
export function removeAnswer(question, authedUser) {
  return {
    type: REMOVE_ANSWER,
    question,
    authedUser
  }
}
