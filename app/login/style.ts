
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 440px;
  background-color: ${({ theme }) => theme.colors.dark1};
  text-align: center;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem; 
`;

export const Subtitle = styled.p`
  display: flex;
  text-align:center;
  color:#000;
  justify-content: center;
  margin-top: 0px;
`;

export const RegisterLink = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

export const RegisterButton = styled.a`
  color: #4caf50;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: #45a049;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-bottom: 1rem;
`;