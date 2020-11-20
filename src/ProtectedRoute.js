import React from 'react'
import { Redirect, Route } from 'react-router-dom'

class ProtectedRoute extends React.Component {
  render() {
    const { component: Component, authedUser, ...rest } = this.props;
    return authedUser ? (
      <Route {...rest} render={(props) => <Component {...props}/>} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: this.props.location }
      }} />
    );
  }
}

export default ProtectedRoute;