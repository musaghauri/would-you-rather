import React from 'react'
import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  Select,
} from '@chakra-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { setAuthedUser } from '../../../actions/authedUser'

import Logo from '../../../logo.svg'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedUser: null
    }

  }

  handleSelect = (e) => this.setState({ selectedUser: e.target.value })
  handleLogin = () => {
    const { dispatch, history } = this.props;
    dispatch(setAuthedUser(this.state.selectedUser))
    if(!history.location.state) history.replace("/")
    else history.replace(history.location.state.from.pathname);
  }

  render() {
    const { users } = this.props
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
          backgroundColor="gray.50"
          borderTopLeftRadius={[0, 8, 8]}
          borderTopRightRadius={[0, 8, 8]}
          borderBottom="1px solid"
          borderBottomColor="gray.200"
          px={6}
          py={2}
        >
          <Flex justify="space-between" direction="column" w="full">
            <Text
              color="black.500"
              fontWeight="medium"
              mt={1}
            >
              Welcome to the Would You Rather App!
        </Text>
            <Text
              color="gray.500"
              fontWeight="medium"
              mt={1}
            >
              Plese sign in to continue
        </Text>
          </Flex>
        </Flex>
        <Flex direction="column" p={6}>
          <Image
            size="100px"
            objectFit="cover"
            src={Logo}
            alt="React Logo"
            margin="0 auto"
          />
          <Text
            fontSize="lg"
            color="teal.500"
            fontWeight="bold"
            mt={1}
          >
            Sign in
        </Text>
          <Select
            my={2}
            defaultValue=""
            onChange={this.handleSelect}
            isRequired
          >
            <option disabled value="">Select User</option>
            {
              users && Object.keys(users).map((user) => <option key={user} value={user} >{users[user].name}</option>)
            }
          </Select>
          <Button
            variantColor="teal"
            mt={1}
            onClick={this.handleLogin}
          >
            Sign in
      </Button>
        </Flex>
      </Box>
    )
  }

}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  }
}

export default withRouter(connect(mapStateToProps)(Login))