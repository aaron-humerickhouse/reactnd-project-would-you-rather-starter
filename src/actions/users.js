export const GET_USERS = 'GET_USERS'
export const ADD_ANSWER = 'ADD_ANSWER'

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
