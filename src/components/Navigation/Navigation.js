import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav``;

export const StyledList = styled.ul`
  display: flex;
`;

export const StyledItem = styled.li`
  width: 50%;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 8px 0;
  border-radius: ${props => props.theme.$borderRadius};
  text-decoration: none;
  color: black;
  background-color: lightblue;

  &.active {
    color: white;
    background-color: ${props => props.theme.colors.$accentColor};
  }

  /* &:hover:not(.active) {
    background-color: lightblue;
  } */
`;
