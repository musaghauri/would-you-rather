import React, { Component } from 'react'
import { Box, Text, Flex, Link, Avatar } from '@chakra-ui/core';
import { Link as ReactLink } from "react-router-dom";
import LoadingBar from 'react-redux-loading'
import { setAuthedUser } from '../../../actions/authedUser'
import { connect } from 'react-redux'

class Nav extends Component {
  render() {
    const { authedUser, users, dispatch } = this.props
    return (
      <Box
      >
        <LoadingBar style={{ backgroundColor: "#319795" }} />
        <Text
          backgroundColor="blackAlpha.400"
          color="gray.800"
          textAlign="center"
          fontSize="lg"
        >
          Would you Rather App
            </Text>

        <Flex
          backgroundColor="white"
          mb={[2, 4]}
          w="full"
          borderBottom="2px solid"
          borderColor="teal.500"
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            pt={4}
            pb={4}
            maxW="1050px"
            margin="0 auto"
            w="full"
            px={8}
            h="60px"
          >
            <Flex align="center">
              <Link as={ReactLink} mr={4} to="/">Home</Link>
              <Link as={ReactLink} mr={4} to="/add">New Question</Link>
              <Link as={ReactLink} mr={4} to="/leaderboard">Leader Board</Link>
            </Flex>
            <Flex justifyContent="center" alignItems="center">

              {
                authedUser ? (
                  <>
                    <Text mr={4}>
                      {users[authedUser].name}
                    </Text>
                    <Avatar
                      name={users[authedUser].name}
                      size="xs"
                      src={users[authedUser].avatarURL}
                      mr={4}
                    />
                    <Link cursor="pointer" onClick={() => dispatch(setAuthedUser(null))}>Logout</Link >
                  </>
                ) :
                  <Link as={ReactLink} to="/login" >Login</Link >
              }
            </Flex>
          </Flex>
        </Flex>
      </Box>
    )
  }

}



function mapStateToProps({ authedUser, users }) {
  return {
    loading: authedUser === null,
    authedUser: authedUser,
    users: users,
  }
}

export default connect(mapStateToProps)(Nav)