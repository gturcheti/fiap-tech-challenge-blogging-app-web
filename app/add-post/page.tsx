import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { PostService } from '@/services/post';
import { Heading2 } from '@/styles/typography';
import { StyledInput, Button } from '@/components';
import { Form, Textarea } from './styles';
import { Person } from '@/types/person';

type AddPostProps = {
  person: Person;
  onPostCreated: () => void;
}

export default function AddPost({ onPostCreated, person } : AddPostProps) {
  const { user, token, isProfessor } = useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  if (!isProfessor) return <p>Somente professores podem criar postagens.</p>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !token) return;

    const post = {
      title,
      content,
      author: person,
      name: user.username,
    };

    try {
      await PostService.create(token, post);
      setTitle('');
      setContent('');
      alert('Post criado com sucesso!');
      onPostCreated();
    } catch (err: unknown) {
      console.error('Erro ao criar post:', err);
      alert('Erro ao criar o post.');
    }
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Heading2>Criar Postagem</Heading2>
      <StyledInput
        placeholder="Título"
        maxLength={110}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Conteúdo"
        maxLength={1000}
        rows={5}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit">Enviar</Button>
    </Form>
  );
}
