import React from 'react'

import { Link } from '@chakra-ui/core';
import { Link as ReactLink } from "react-router-dom";

class NavLink extends React.Compoent {
  render() {
    const { label, to } = this.props;
    return (
      <Link
        as={ReactLink}
        mr={4}
        py={2}
        px={4}
        to={to}
        _hover={{
          bg: "teal.500",
          color: 'white',
          textDecoration: 'none'
        }}
        _focus={{
          outline: "none",
          bg: "teal.200",
          color: 'white',
        }}
        borderTop='0px'
        borderTopLeftRadius="50%"
        borderTopRightRadius="50%"
      >
        {label}
      </Link>
    )
  }

}

export default NavLink