import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
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
      .then(() => dispatch(hideLoading()))
      .then(() => dispatch(handleInitialData()))
      .then(() => dispatch(setValue('questionAdded', true)))
  }
}


export function saveQuestionAnswer (questionAnswer) {
  return (dispatch) => {
    dispatch(showLoading())
    return _saveQuestionAnswer(questionAnswer)
      .then(() => dispatch(hideLoading()))
      .then(() => dispatch(handleInitialData()))
      .then(() => dispatch(setValue('pollAnswered', true)))
  }
}