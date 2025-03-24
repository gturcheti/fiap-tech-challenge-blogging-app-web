import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding-top: 2rem;
  margin: 0 auto;
max-width:920px;
width:100%
  `;

export const Nav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const ButtonOut = styled.button`
    color:  ${({ theme }) => theme.colors.lightBlue};
    border: solid 2px  ${({ theme }) => theme.colors.magent};
    background: transparent;
    border-radius: 2rem;
    width:120px;
    padding:.7rem

`;

