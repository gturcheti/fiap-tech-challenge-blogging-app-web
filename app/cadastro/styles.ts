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
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: #333;
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #45a049;
  }

  &:active {
    background: #388e3c;
  }
`;

export const HandleBackLink = styled.div`
  text-align: center;
`;

export const BackButton = styled.a`
  color: #4caf50;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: #45a049;
  }
`;

export const ErrorMessage = styled.p`
  color: #d32f2f;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  color: #b0c4cf;
  gap: 0.5rem;
  
`;

export const CustomCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background-color: #fff;
  display: grid;
  place-content: center;
  transition: background-color 0.3s ease;
  cursor:pointer;
 

  &:checked {
      background-color: ${({ theme }) => theme.colors.magent};
  }

  &:checked::before {
    content: '';
    width: 12px;
    height: 12px;
    background-color: #b0c4cf;
    border-radius: 2px;
    transition: background-color 0.3s ease;
  }
`;
