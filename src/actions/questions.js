import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestion } from '../utils/_DATA'
import { handleInitialData } from './shared'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SET_VALUE = 'QUESTIONS/SET_VALUE'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}


export function setValue(name, value) {
  return {
    type: SET_VALUE,
    name,
    value
  }
}


export function saveQuestion (question) {
  return (dispatch) => {
    dispatch(showLoading())
    return _saveQuestion(question)
      .then(() => {
        dispatch(hideLoading())
        dispatch(handleInitialData())
        dispatch(setValue('questionAdded', true))
        // dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}