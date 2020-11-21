import React from 'react'
import _forOwn from 'lodash/forOwn'
import {
  Box,
  Flex,
} from '@chakra-ui/core';
import LeaderCard from '../../widgets/LeaderCard'
import { connect } from 'react-redux'

class LeaderBoard extends React.Component {
  render() {
    const { users } = this.props;
    let USERS = {};
    _forOwn(users, (val, key) => {
      USERS[key] = Object.keys(val.answers).length + val.questions.length;
    })
    USERS = Object.entries(USERS)
      .sort(([,a],[,b]) => b-a)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
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
            Object.keys(USERS).map(user => {
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