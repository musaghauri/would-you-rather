import { getInitialData } from '../utils/api'
import { setAuthedUser } from '../actions/authedUser'
import { receiveUsers } from '../actions/users'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users }) => {
        dispatch(hideLoading())
        dispatch(receiveUsers(users))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}