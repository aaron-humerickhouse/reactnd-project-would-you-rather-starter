import { GET_USERS, ADD_ANSWER, REMOVE_ANSWER } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER: {
      const { authedUser, question, option } = action;
      const user = state[authedUser];

      return {
        ...state,
        [user.id]: {
          ...user,
          answers: {
            ...user.answers,
            [question.id]: option,
          },
        },
      }; }
    case REMOVE_ANSWER: {
      const { authedUser, question } = action;
      const user = state[authedUser];

      return {
        ...state,
        [user.id]: {
          ...user,
          answers: removeQuestion(state[user.id].answers, question),
        },
      }; }

    default:
      return state;
  }
}

function removeQuestion(answers, question) {
  let answersCopy = Object.assign({}, answers);
  delete answersCopy[question.id];
  return answersCopy;
}
