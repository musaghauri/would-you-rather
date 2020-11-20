import { getInitialData } from '../utils/api'
// import { setAuthedUser } from '../actions/authedUser'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'

// const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(hideLoading())
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        // dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}