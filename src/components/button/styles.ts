import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.colors.magent};
  color: ${({ theme }) => theme.colors.lightBlue};
  padding: .7rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
width:100%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.magent};
    color: ${({ theme }) => theme.colors.lightBlue};
    opacity: 0.9
    
  }

  &:disabled {
    opacity: 0.;
    cursor: not-allowed;
  }
`