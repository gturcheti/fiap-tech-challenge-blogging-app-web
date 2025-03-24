import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    margin: auto;
    margin-bottom: 1.5rem;
  background-color: ${({ theme }) => theme.colors.dark1};
  text-align: center;
    padding: 1rem;
    border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  padding: 1rem;
  background-color:#fafafa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border:none;
  color: #000;
   width: 90%;
       display: inline-block;
`;

export const Textarea = styled.textarea`
 padding: .7rem;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.dark1};
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.dark2};
width:100%;
resize: none;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.magent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.dark1};
        text-transform: uppercase;
  
  }
       
`;

export const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  background: #2e7d32;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  width: 90%;
  display: inline-block;

  &:hover {
    background: #1b5e20;
  }
`;
