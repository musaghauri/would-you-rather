import React from 'react'
import {
  Box,
  Flex,
  Text,
  Button,
  Avatar,
  Radio,
  RadioGroup
} from '@chakra-ui/core';
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { _saveQuestionAnswer } from '../../../utils/_DATA'
import { handleInitialData } from '../../../actions/shared'

class Poll extends React.Component {
  state = { answer: null }

  handleOptionSelect = (e) => this.setState({ answer: e.target.value })

  handleSubmit = () => {
    const { answer } = this.state
    const { authedUser, dispatch, history } = this.props;
    const { questionId } = this.props.match.params;
    _saveQuestionAnswer({ authedUser: authedUser, qid: questionId, answer: answer }).then(() => {
      dispatch(handleInitialData()).then( () => history.push(`/questions/${questionId}`))
    })
  }

  render() {
    const { answer } = this.state;
    const { questions, users } = this.props
    const { questionId } = this.props.match.params;
    const currentQuestion = questions[questionId]
    const author = users[currentQuestion.author]
    console.log({ currentQuestion })
    return (
      <Box
        backgroundColor="white"
        border="2px solid"
        borderColor="gray.200"
        borderRadius="5px"
        mt={4}
        w="lg"
        margin="0px auto"
      >
        <Flex
          backgroundColor="gray.50"
          px={6}
          py={2}
        >
          <Text
            color="black.500"
            mt={1}
            fontSize="lg"
            fontWeight="bold"
          >
            {author.name} asks:
            </Text>
        </Flex>
        <Flex p={4} >
          <Avatar
            size="xl"
            objectFit="cover"
            name={author.name}
            src={author.avatarURL}
            alt="Author image"
            mr={8}
          />
          <Flex direction="column" w="full" justify="Start">
            <Flex direction="column" align="start">
              <Text
                fontWeight="bold"
                mt={1}
              >
                Would you rather ...
            </Text>
              <RadioGroup my={2} value={answer} onChange={this.handleOptionSelect}>
                <Radio value="optionOne">{currentQuestion.optionOne.text}</Radio>
                <Radio value="optionTwo">{currentQuestion.optionTwo.text}</Radio>
              </RadioGroup>
            </Flex>
            <Button
              mt={2}
              variantColor="teal"
              onClick={this.handleSubmit}
              isDisabled={!answer}
            >
              Submit
          </Button>
          </Flex>
        </Flex>
      </Box>
    )

  }
}
function mapStateToProps({ loading, authedUser, users, questions }) {
  return {
    loading,
    authedUser,
    users,
    questions
  }
}

export default connect(mapStateToProps)(withRouter(Poll))