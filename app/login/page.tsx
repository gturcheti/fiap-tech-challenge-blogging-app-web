"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { jwtDecode } from 'jwt-decode';
import { api } from '@/services/api';
import { Button, StyledInput } from '@/components';
import { Wrapper, Container, Form,  RegisterLink, ErrorMessage } from './style';
import { Heading1, Paragraph, LinkHref } from '@/styles/typography';

interface DecodedToken {
  sub: number;
  iat: number; 
  exp: number; 
}

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await api.post('/auth', { username, password });
      const { access_token } = response.data;

      localStorage.setItem('token', access_token);

      const decodedToken = jwtDecode<DecodedToken>(access_token);
      const userId = decodedToken.sub;

      const userResponse = await api.get(`/person/${userId}`, {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      const { name, surname, email, professor } = userResponse.data;

      localStorage.setItem('userData', JSON.stringify({
        name, surname, email, professor, id: userId,
      }));

      router.push('/dashboard');
    } catch (err) {
      console.error('Erro no login:', err);
      setError('Usuário ou senha inválidos.');
    }
  };

  return (
    <Wrapper>
      <Container>
        <Heading1>Login</Heading1>
        <Paragraph>Entre com seu login de aluno ou professor</Paragraph>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Form  onSubmit={handleLogin}>
          <StyledInput
            type="text"
            autoComplete="off"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <StyledInput
            type="password"
            autoComplete="off"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Entrar</Button>
        </Form>
        
        <RegisterLink>
        <LinkHref as={Link} href="/cadastro">
          Cadastre-se
        </LinkHref>
        </RegisterLink>
      </Container>
    </Wrapper>
  );
}
