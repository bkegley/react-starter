// Export Constants
export const INVALIDATE_USER = 'INVALIDATE_USER'
export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'

// Export Actions
export const invalidateUser = () => {
  return {
    type: INVALIDATE_USER,
  }
}

export const requestUser = () => {
  return {
    type: REQUEST_USER,
  }
}

export const receiveUser = json => {
  return {
    type: RECEIVE_USER,
    user: json,
    receivedAt: Date.now()
  }
}

const fetchUser = () => dispatch => {
  dispatch(requestUser())
  return fetch(`https://9f5d7219.ngrok.io/app/user/fetchcurrentuser`, {
    credentials: 'include',
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  })
    .then(res => res.json())
    .then(res => {
      delete res.token
      return dispatch(receiveUser(res))
    })
}

const shouldFetchUser = state => {
  const user = state.app.user
  if (!user.user) {
    return true
  } else if (user.isFetching) {
    return false
  } else {
    return user.didInvalidate
}
}

export const fetchUserIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchUser(getState())) {
    return dispatch(fetchUser())
  }
}