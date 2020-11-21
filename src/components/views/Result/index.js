import React from 'react'
import {
  Box,
  Flex,
  Text,
  Avatar,
  Input
} from '@chakra-ui/core';
import { withRouter } from "react-router";
import { connect } from 'react-redux';

class Result extends React.Component {

  render() {
    const { questionId } = this.props.match.params;
    const { questions, users, authedUser } = this.props;

    const currentUser = users[authedUser];
    const currentQuestion = questions[questionId];
    const author = users[currentQuestion.author];

    const optionOneVotes = currentQuestion.optionOne.votes.length;
    const optionTwoVotes = currentQuestion.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
   
    return (
      <Box
        backgroundColor="white"
        border="2px solid"
        borderColor="gray.200"
        borderRadius="5px"
        mt={4}
        w="xl"
        margin="0 auto"
      >
        <Text
          color="black.500"
          py={2}
          pl={4}
          fontSize="lg"
          fontWeight="bold"
          backgroundColor="gray.50"
        >
          Asked by {author.name}
        </Text>
        <Flex p={4} justify="space-evenly" align="center">
          <Avatar
            size="xl"
            objectFit="cover"
            alt="Current User"
            src={author.avatarURL}
            mr={8}
          />
          <Flex direction="column" w="full" justify="Start" mr={4}>
            <Flex direction="column" align="start">
              <Text
                fontWeight="bold"
                mt={1}
                fontSize="xl"
              >
                Results:
              </Text>
              <Box
                backgroundColor={currentQuestion.optionOne.votes.includes(currentUser.id) ? 'teal.50' : "gray.50"}
                border="2px solid"
                borderColor="gray.200"
                borderRadius="5px"
                h="full"
                w="full"
                mt={2}
              >
                <Text
                  fontWeight="bold"
                  color="teal.500"
                  w="80%"
                  mx="auto"
                  my={2}
                >
                  {currentQuestion.optionOne.text}
                </Text>
                <Box w="80%" mx="auto" my={2} backgroundColor="gray.200" borderRadius="4px">
                  <Input
                    backgroundColor={optionOneVotes > 0 ? "teal.600" : "gray.200"}
                    width={`${((optionOneVotes / totalVotes) * 100).toFixed(2)}%`}
                    value={`${((optionOneVotes / totalVotes) * 100).toFixed(2)}%`}
                    textAlign="right"
                    color="white"
                    border="none"
                    outline="none"
                    onChange={() => null}
                  />
                </Box>
                <Text
                  fontWeight="bold"
                  color="gray.600"
                  w="80%"
                  mx="auto"
                  my={2}
                >
                  {optionOneVotes} out of {totalVotes}
                </Text>
              </Box>
              <Box
                backgroundColor={currentQuestion.optionTwo.votes.includes(currentUser.id) ? 'teal.50' : "gray.50"}
                border="2px solid"
                borderColor="gray.200"
                borderRadius="5px"
                h="full"
                w="full"
                mt={2}
              >
                <Text
                  fontWeight="bold"
                  w="80%"
                  mx="auto"
                  my={2}
                >
                  {currentQuestion.optionTwo.text}
                </Text>
                <Box w="80%" mx="auto" my={2} backgroundColor="gray.200" borderRadius="4px">
                  <Input
                    backgroundColor={optionTwoVotes !== 0 ? "teal.600" : "gray.200"}
                    width={`${((optionTwoVotes / totalVotes) * 100).toFixed(2)}%`}
                    value={`${((optionTwoVotes / totalVotes) * 100).toFixed(2)}%`}
                    textAlign="right"
                    color="white"
                    border="none"
                    outline="none"
                    onChange={() => null}
                  />
                </Box>

                <Text
                  fontWeight="bold"
                  color="gray.600"
                  w="80%"
                  mx="auto"
                  my={2}
                >
                  {optionTwoVotes} out of {totalVotes}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    loading: authedUser === null,
    authedUser,
    users,
    questions: questions.questions,
  }
}

export default withRouter(connect(mapStateToProps)(Result))