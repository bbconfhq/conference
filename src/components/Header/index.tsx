import { Link } from 'gatsby';
import React from 'react';

import { Container, InternalNavContainer, Nav } from './style';

const Header = () => {
  return (
    <Container>
      <Nav>
        <div>
          <Link to={'/'}>Home</Link>
        </div>
        <InternalNavContainer>
          <Link to={'/archive'}>Archive</Link>
          <Link to={'/guidelines'}>Guidelines</Link>
          <Link to={'/about'}>About</Link>
        </InternalNavContainer>
      </Nav>
    </Container>
  );
};

export default Header;