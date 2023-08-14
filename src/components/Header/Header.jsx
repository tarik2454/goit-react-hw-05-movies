import React from 'react';
import { StyledContainer, StyledHeader } from 'styles/GlobalStyle';

export const Header = ({ children }) => {
  return (
    <StyledHeader>
      <StyledContainer>{children}</StyledContainer>
    </StyledHeader>
  );
};
