import React from 'react'
import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/core';
import QuestionCard from '../../widgets/QuestionCard'
import { connect } from 'react-redux'

class Home extends React.Component {
  state = {
    tab: 'unanswered-questions',
    sortedUnanswered: [],
    sortedAnswered: []
  }

  componentDidMount() {
    const { questions, users, authedUser } = this.props;
    const currentUser = users[authedUser];
    const answered = currentUser.answers;
    console.log({ questions, users, authedUser })
    const unanswered = Object.keys(questions)
      .filter(question => !Object.keys(answered).includes(question))// eslint-disable-next-line 
      .reduce((res, question) => (res[question] = questions[question], res), {}); 

    // Sorted
    const sortedUnanswered = Object.values(unanswered).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    const sortedAnswered = Object.keys(answered).sort((a, b) => new Date(questions[b].timestamp) - new Date(questions[a].timestamp));
    this.setState({ sortedUnanswered, sortedAnswered })
    console.log({ sortedUnanswered, sortedAnswered })
  }

  render() {
    const { tab, sortedUnanswered, sortedAnswered } = this.state
    const { users, questions } = this.props;

    return (
      <Box
        backgroundColor="white"
        w="lg"
        margin="0 auto"
        border="2px solid"
        borderColor="gray.200"
        borderRadius="5px"
      >
        <Flex
          borderTopLeftRadius={[0, 8, 8]}
          borderTopRightRadius={[0, 8, 8]}
          borderBottom="1px solid"
          borderBottomColor="gray.200"
        >
          <Flex justify="space-evenly" w="full">
            <Text
              color={tab === 'unanswered-questions' ? 'teal.500' : 'black'}
              backgroundColor={tab === 'unanswered-questions' ? 'gray.100' : 'white'}
              fontWeight="bold"
              px={6}
              py={2}
              flexBasis="100%"
              onClick={() => this.setState({ tab: 'unanswered-questions' })}
              cursor="pointer"
            >
              Unanswered Questions
            </Text>
            <Text
              color={tab === 'answered-questions' ? 'teal.500' : 'black'}
              backgroundColor={tab === 'answered-questions' ? 'gray.100' : 'white'}
              fontWeight="bold"
              px={6}
              flexBasis="100%"
              py={2}
              onClick={() => this.setState({ tab: 'answered-questions' })}
              cursor="pointer"
            >
              Answered Questions
          </Text>
          </Flex>
        </Flex>
        <Flex direction="column" p={6}>
          {
            tab === 'unanswered-questions' ? (
              <>
                {
                  sortedUnanswered.map(question => {
                    return <QuestionCard
                      key={question.id}
                      users={users}
                      question={question}
                    />
                  })
                }
              </>
            ) :
              tab === 'answered-questions' && (
                <>
                  {
                    sortedAnswered.map(key => {
                      return <QuestionCard
                        key={key}
                        users={users}
                        question={questions[key]}
                        showResult
                      />
                    })
                  }
                </>
              )
          }
        </Flex>
      </Box>
    )
  }

}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    users,
    questions
  }
}

export default connect(mapStateToProps)(Home)