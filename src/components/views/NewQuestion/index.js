import React from 'react'
import {
  Box,
  Button,
  Flex,
  Text,
  Input,
  Divider
} from '@chakra-ui/core';
import { connect } from 'react-redux'
import { _saveQuestion } from '../../../utils/_DATA'
import { handleInitialData } from '../../../actions/shared'

class NewQuestion extends React.Component {
  state = {
    firstOption: '',
    secondOption: '',
  }

  handleSubmit = () => {
    const { firstOption, secondOption } = this.state
    const { authedUser, dispatch, history } = this.props;
    _saveQuestion({ author: authedUser, optionOneText: firstOption, optionTwoText: secondOption }).then(() => {
      dispatch(handleInitialData()).then(() => history.push('/'))
    })
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { firstOption, secondOption } = this.state
    return (
      <Box
        backgroundColor="white"
        w="lg"
        margin="0 auto"
        border="2px solid"
        borderColor="gray.200"
      >
        <Flex
          backgroundColor="white"
          borderTopLeftRadius={[0, 8, 8]}
          borderBottom="1px solid"
          borderBottomColor="gray.200"
          px={6}
          py={2}
        >
          <Text
            color="black.500"
            mt={1}
            fontSize="lg"
            fontWeight="bold"
          >
            Create New Question
        </Text>
        </Flex>
        <Flex direction="column" p={4} justify="space-between" align="start">
          <Text
            color="gray.500"
            fontSize="sm"
            fontWeight="medium"
          >
            Complete the question:
        </Text>
          <Text
            fontWeight="bold"
            mt={4}
            mb={2}
          >
            Would you rather ...
        </Text>
          <Input placeholder="Enter Option One Text Here" size="lg" name="firstOption" value={firstOption} onChange={this.handleInputChange} />
          <Flex w="full" justify="Space-between" align="center">
            <Divider width="45%" />
            <Text fontWeight="bold" my={2}>OR</Text>
            <Divider width="45%" />
          </Flex>
          <Input placeholder="Enter Option Two Text Here" size="lg" name="secondOption" value={secondOption} onChange={this.handleInputChange} />
          <Button
            variantColor="teal"
            mt={4}
            w="full"
            isDisabled={!firstOption || !secondOption}
            onClick={this.handleSubmit}
          >
            Submit
      </Button>
        </Flex>
      </Box>
    )
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    questions
  }
}

export default connect(mapStateToProps)(NewQuestion)