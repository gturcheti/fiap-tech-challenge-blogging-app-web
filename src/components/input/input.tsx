import { InputHTMLAttributes } from 'react';
import {  StyledInput  } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};
