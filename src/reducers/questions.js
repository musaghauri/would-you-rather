import { RECEIVE_QUESTIONS, SET_VALUE } from '../actions/questions'

const initialState = {
  questionAdded: false,
  questions: []
}
export default function questions(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        questions: action.questions,
      }
    case SET_VALUE:
        return {
          ...state,
          [action.name]: action.value
        }
    default:
      return state
  }
}