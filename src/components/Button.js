import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease;
  border: 0.2rem solid var(--light-blue);
  border-color: ${({ cart }) =>
    cart ? 'var(--main-yellow)' : 'var(--light-blue)'};
  color: ${({ cart }) => (cart ? 'var(--main-yellow)' : 'var(--light-blue)')};

  &:hover {
    color: var(--main-blue);
    background: ${({ cart }) =>
      cart ? 'var(--main-yellow)' : 'var(--light-blue)'};
  }

  &:focus {
    outline: none;
  }
`;
