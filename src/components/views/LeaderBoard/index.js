import React from 'react'
import {
  Box,
  Flex,
} from '@chakra-ui/core';
import LeaderCard from '../../widgets/LeaderCard'
import { connect } from 'react-redux'

class LeaderBoard extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <Box
        backgroundColor="white"
        w="lg"
        margin="0 auto"

      >
        <Flex
          direction="column"
        >
          {
            Object.keys(users).map(user => {
              return <LeaderCard key={user} user={users[user]} />
            })
          }
        </Flex>
      </Box>
    )
  }

}

function mapStateToProps({ users }) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(LeaderBoard)