import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

import App from './App'

// Import Store
import store, { history } from './store'

// Import Routes
import routes from './routes'

// Create Apollo Client
const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://efcb6b75.ngrok.io/graphql' }),
  cache: new InMemoryCache()
})

const contentNode = document.getElementById('root')

ReactDOM.render(
  // <Provider store={store}>
  //   <ConnectedRouter history={history}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
  //   </ConnectedRouter>
  // </Provider>,
  contentNode)
