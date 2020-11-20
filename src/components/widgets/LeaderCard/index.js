import React from 'react'
import {
  Box,
  Flex,
  Text,
  Avatar,
  Divider,
  Badge
} from '@chakra-ui/core';

class LeaderCard extends React.Component {
  render() {
    const { user } = this.props
    const answersCount = Object.keys(user.answers).length
    const questionsCount = user.questions.length
    return (
      <Box
        backgroundColor="white"
        border="2px solid"
        borderColor="gray.200"
        borderRadius="5px"
        mt={4}
        w="xl"
      >
        <Flex p={4} justify="space-evenly">
          <Avatar
            size="xl"
            objectFit="cover"
            name={user.name}
            src={user.avatarURL}
            alt="User image"
            mr={8}
          />
          <Flex direction="column" w="full" justify="Start" mr={4}>
            <Flex direction="column" align="start">
              <Text
                fontWeight="bold"
                mt={1}
              >
                {user.name}
              </Text>
              <Flex justify="space-between" align="baseline" w="full">
                <Text mt={2}>Answered Questions</Text><Text>{answersCount}</Text>
              </Flex>
              <Divider width="100%" />
              <Flex justify="space-between" align="baseline" w="full">
                <Text >Unanswered Questions</Text><Text>{questionsCount}</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction="column" w="50%" justify="Start" ml={2}
          >
            <Box
              backgroundColor="white"
              border="2px solid"
              borderColor="gray.200"
              borderRadius="5px"
              h="full"
            >
              <Flex direction="column" align="center" h="full">
                <Text
                  backgroundColor="gray.50"
                  borderBottom="2px solid"
                  borderColor="gray.200"
                  fontWeight="bold"
                  color="gray.600"
                  w="full"
                >
                  Score
            </Text>
                <Badge
                  variantColor="teal"
                  marginY="auto"
                  marginX="auto"
                  borderRadius="25px"
                  fontSize="lg"
                  p={2}
                >
                  {answersCount + questionsCount}
                </Badge>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>
    )
  }
}

export default LeaderCard