export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const GET_AUTHED_USER = 'GET_AUTHED_USER'

function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id
  }
}

export function handleSetAuthedUser(id) {
  return(dispatch) => {
    id === null
      ? localStorage.removeItem('authedUser')
      : localStorage.setItem('authedUser', id);
    dispatch(setAuthedUser(id))
  }
}
