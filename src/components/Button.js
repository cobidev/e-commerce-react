import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.2rem solid var(--light-blue);
  color: var(--light-blue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease;

  &:hover {
    background: var(--light-blue);
    color: var(--main-blue);
  }

  &:focus {
    outline: none;
  }
`;
