import React from 'react';
import { Container, InternalNavContainer, Nav } from './style';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <Container>
      <Nav>
        <div>
          <Link to={'/'}>Home</Link>
        </div>
        <InternalNavContainer>
          <Link to={'/archive'}>Archive</Link>
          <Link to={'/about'}>About</Link>
        </InternalNavContainer>
      </Nav>
    </Container>
  )
}

export default Header;