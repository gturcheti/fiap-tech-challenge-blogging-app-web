'use client';
import { useState } from 'react';
import { api } from '@/services/api';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button, StyledInput } from '@/components';
import { Heading1, LinkHref } from '@/styles/typography';
import { Wrapper, Container, Title, Form, HandleBackLink, BackButton, ErrorMessage, CheckboxLabel, CustomCheckbox } from './styles';


export default function Register() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [professor, setProfessor] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const personResponse = await api.post('/person', {
                name,
                surname,
                email,
                professor,
            });

            const personId = personResponse.data.id;

            const userResponse = await api.post('/user', {
                username,
                password,
                person: {
                    name,
                    surname,
                    email,
                    professor,
                    id: personId,
                },
            });
            if (userResponse.status === 201) {
                console.log('Usuário criado com sucesso:', userResponse.data);

                router.push('/login');
            } else {
                setError('Erro ao criar o usuário.');
            }
        } catch (err) {
            console.error('Erro ao registrar:', err);
            setError('Erro ao criar conta.');
        }
    };

    return (
        <Wrapper>
            <Container>
                <Heading1>Cadastro</Heading1>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Form onSubmit={handleRegister}>
                    <StyledInput
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <StyledInput
                        type="text"
                        placeholder="Sobrenome"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                    <StyledInput
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <StyledInput
                        type="text"
                        placeholder="Nome de usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <StyledInput
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <CheckboxLabel>
                        <CustomCheckbox checked={professor}
                            onChange={(e) => setProfessor(e.target.checked)} />
                        Sou professor
                    </CheckboxLabel>
                    <Button type="submit">Cadastrar</Button>
                    <HandleBackLink>
                        <LinkHref  as={Link} href="/login">Voltar ao Login</LinkHref>
                    </HandleBackLink>
                </Form>
            </Container>
        </Wrapper>
    );
}
