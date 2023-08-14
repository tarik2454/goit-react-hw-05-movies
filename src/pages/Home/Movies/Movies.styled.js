import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

export const StyledInput = styled.input`
  min-width: 60%;
  margin-bottom: 20px;
  padding: 7px 10px;
  border: ${props => props.theme.input.$border};
  border-radius: ${props => props.theme.input.$borderRadius};

  &:focus {
    outline: transparent;
    border: 1px solid #437aa5;
  }
`;

export const StyledList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-left: 30px;
`;
