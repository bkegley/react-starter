import { combineReducers } from 'redux'

import { 
    INVALIDATE_USER,
    REQUEST_USER,
    RECEIVE_USER
} from './AppActions'

function user(state = {}, action ) {
  switch(action.type) {

    case INVALIDATE_USER:
    return {
        ...state,
        didInvalidate: true
    }

case REQUEST_USER:
    return {
        ...state,
        isFetching: true,
        didInvalidate: false
    }

case RECEIVE_USER:
    return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        user: action.user,
        lastUpdated: action.receivedAt
    }
  }
  
  return state
}

const app = combineReducers({
  user
})

export default app
