import React from 'react'
import {
  Box,
  Flex,
  Text,
  Button,
  Avatar,
  Link
} from '@chakra-ui/core';
import { Link as ReactLink } from "react-router-dom";
import { format } from 'date-fns'


class QuestionCard extends React.Component {
  render() {
    const { users, question, showResult } = this.props
    return (
      <Box
        backgroundColor="white"
        border="2px solid"
        borderColor="gray.200"
        borderRadius="5px"
        mt={4}
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
            {users[question.author].name} asks:
            </Text>
        </Flex>
        <Flex p={4} >
          <Avatar
            size="xl"
            objectFit="cover"
            alt="Author Icon"
            name={users[question.author].name}
            src={users[question.author].avatarURL}
            mr={8}
          />
          <Flex direction="column" w="full" justify="Start">
            <Flex direction="column" align="start">
              <Text
                fontWeight="bold"
                mt={1}
              >
                Would you rather
            </Text>
            <Text color="gray.500" my={2}>{question?.optionOne?.text}</Text>
            <Text color="gray.500" my={2}>{format(new Date(question.timestamp), 'do MMM yyyy')}</Text>
            </Flex>
            {
              !showResult ? (
                <Link to={`/questions/${question.id}`} as={ReactLink}
                  _hover={{ textDecoration: "none" }}
                >
                  <Button
                    mt={1}
                    w="full"
                    variantColor="teal" variant="outline"
                  >
                    View Poll
            </Button>
                </Link>
              ) : (
                  <Link to={`/questions/${question.id}`} as={ReactLink}
                    _hover={{ textDecoration: "none" }}
                  >
                    <Button
                      mt={1}
                      w="full"
                      variantColor="teal" variant="outline"
                    >
                      View Poll
                     </Button>
                  </Link>)
            }
          </Flex>
        </Flex>
      </Box>
    )
  }
}

export default QuestionCard