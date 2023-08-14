import React from 'react';
import { StyledNav, StyledList, StyledItem, StyledNavLink } from './Navigation';

export const Navigation = () => {
  return (
    <StyledNav>
      <StyledList>
        <StyledItem>
          <StyledNavLink to="/">Home</StyledNavLink>
        </StyledItem>
        <StyledItem>
          <StyledNavLink to="/about">Movies</StyledNavLink>
        </StyledItem>
      </StyledList>
    </StyledNav>
  );
};
