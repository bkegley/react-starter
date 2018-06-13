import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class App extends Component {
  render() {
    const { data } = this.props
    return (
      <div>
        {data && data.loading && 
          <div>Loading</div>
        }
        {data && !data.loading && data.getComments.map(comment => {
          return (
            <p key = {comment._id}>{comment.text}</p>
          )
        })
        }
      </div>
    )
  }
}


export default graphql(gql`
{
  getTodos {
    todo
    _id
  }
}
`)(App)
