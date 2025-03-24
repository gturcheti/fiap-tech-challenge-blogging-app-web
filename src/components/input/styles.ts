import styled from 'styled-components'

export const StyledInput = styled.input`
  padding: .7rem;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.dark1};
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.dark2};
width:100%;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.magent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.dark1};
        text-transform: uppercase;
  }
`;