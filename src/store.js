import { applyMiddleware, createStore, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'

// Import root reducer
import reducers from './reducers'

// Import middleware
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

const middleware = [ thunk, createLogger() ]

const store = createStore(
  connectRouter(history)(reducers),
  applyMiddleware(routerMiddleware(history), ...middleware)
)

export default store
