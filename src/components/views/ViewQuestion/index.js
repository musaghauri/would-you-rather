import React from 'react'
import { connect } from 'react-redux';
import Result from '../Result'
import Poll from '../Poll'
import NotFound from '../NotFound'

class ViewQuestion extends React.Component {

  render() {
    const { questionId } = this.props.match.params;
    const { questions, authedUser } = this.props;
    if(!questions[questionId]) return <NotFound />
    else {
        console.log("MUSA", questions[questionId])
        const currentQuestion = questions[questionId];
        const { optionOne, optionTwo } = currentQuestion;
        const votes = [...optionOne.votes, ...optionTwo.votes];
        const isUnanswered = !votes.includes(authedUser);
        
        if(isUnanswered) return <Poll {...this.props} />
        return <Result {...this.props} /> 
    }
  }
}


function mapStateToProps({ authedUser, questions }) {
    return {
      loading: authedUser === null,
      authedUser,
      questions: questions.questions,
    }
  }
  
export default connect(mapStateToProps)(ViewQuestion);
