import React from 'react';
import { Navbar, Alignment } from '@blueprintjs/core';

import './navbar.css'

const homeNavbar = () => {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>ToDo App</Navbar.Heading>
        <Navbar.Divider />
      </Navbar.Group>
    </Navbar>
  )
}

export default homeNavbar