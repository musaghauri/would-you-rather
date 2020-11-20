import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/layout/Nav'
import Home from './components/views/Home'
import Login from './components/views/Login'
import NewQuestion from './components/views/NewQuestion'
import ViewQuestion from './components/views/ViewQuestion'
import LeaderBoard from './components/views/LeaderBoard'
import NotFound from './components/views/NotFound'
import ProtectedRoute from './ProtectedRoute';
import { handleInitialData } from './actions/shared'
import { connect } from 'react-redux'

import './App.css';

class App extends Component {

  componentDidMount() {
    const { dispatch, loading } = this.props
    if (loading === true) {
      dispatch(handleInitialData())
    }
  }

  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <ProtectedRoute exact path="/" component={Home} authedUser={authedUser} />
            <ProtectedRoute path="/add" component={NewQuestion} authedUser={authedUser} />
            <ProtectedRoute path="/leaderboard" component={LeaderBoard} authedUser={authedUser} />
            <ProtectedRoute path="/questions/:questionId" component={ViewQuestion} authedUser={authedUser} />
            <Route path="/login" render={() => <Login />} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }

}

function mapStateToProps({ authedUser, questions }) {
  return {
    loading: authedUser === null,
    authedUser,
    questions
  }
}

export default connect(mapStateToProps)(App)