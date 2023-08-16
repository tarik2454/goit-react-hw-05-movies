import { propTypes } from 'prop-types';
import React from 'react';
import { StyledContainer, StyledHeader } from 'styles/GlobalStyle';

export const Header = ({ children }) => {
  return (
    <StyledHeader>
      <StyledContainer>{children}</StyledContainer>
    </StyledHeader>
  );
};

Header.propTypes = {
  children: propTypes.node.isRequired,
};
