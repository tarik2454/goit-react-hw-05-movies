import React from 'react';
import { AiOutlineStop } from 'react-icons/ai';
import { styled } from 'styled-components';

class NotFound extends React.Component {
  render() {
    return (
      <Wrapper>
        <StyledIcon size="100px" />
        <p>Page not found</p>
      </Wrapper>
    );
  }
}

export default NotFound;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const StyledIcon = styled(AiOutlineStop)`
  width: ${props => props.size};
  height: ${props => props.size};
  color: red;
`;
