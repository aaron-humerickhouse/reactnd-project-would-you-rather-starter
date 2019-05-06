import { GET_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
  switch(action.type) {
    case GET_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION: {
      const {question} = action

      return {
        ...state,
        [question.id]: question
      }
    }
    case ANSWER_QUESTION: {
      const {question, option, authedUser} = action

      return {
        ...state,
        [question.id]: {
          ...question,
          [option]: {
            ...question[option],
            votes: state[question.id][option]['votes'].concat(authedUser)
          }
        }
      }
    }
    default :
      return state
  }
}
