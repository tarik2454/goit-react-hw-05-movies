import { createGlobalStyle, styled } from 'styled-components';
import '@csstools/normalize.css';
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${props => props.theme.colors.$primiryTextColor};
  background-color: ${props => props.theme.colors.$secondaryBgColor};
  line-height: 1;
  letter-spacing: 0.02em;
  }
`;

export const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.$primiryTextColor};

  &:hover {
    text-decoration: underline;
    color: ${props => props.theme.colors.$accentColor};
  }
`;

export const StyledButton = styled.button`
  padding: 10px;
  max-height: 37px;

  border-radius: ${props => props.theme.$borderRadius};
  color: black;
  background-color: lightblue;

  &:hover,
  &.active {
    color: white;
    background-color: ${props => props.theme.colors.$accentColor};
  }
`;

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSection = styled.section`
  width: 100%;
  padding-top: 30px;
`;

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 480px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;
