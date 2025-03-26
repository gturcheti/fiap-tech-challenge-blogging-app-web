'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import { PostService } from '../../src/services/post';
import AddPost from '../add-post/page';
import { Post } from '@/types/post'
import { Person } from '@/types/person'
import { JwtPayload } from '@/types/payload'
import { api } from '@/services/api';
import { Heading1, Heading2, Paragraph } from '@/styles/typography';
import { Button, StyledInput } from '@/components';
import { Wrapper, Container, SectionTitle, PostList, PostListContainer, PostItem, DivItens, DivButton, PostTitle, PostContent, Pagination, PageButton, ModalOverlay, ModalContent, ModalButtons, ModalHeader, CloseButton, ModalBody, SearchInput, PostAuthor } from './styles';
import { Textarea } from 'app/add-post/styles';

export default function Dashboard() {
  const router = useRouter();
  const [person, setPerson] = useState<Person | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [viewPostModalOpen, setViewPostModalOpen] = useState(false);
  const [viewedPost, setViewedPost] = useState<Post | null>(null);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const decoded = jwtDecode<JwtPayload>(token);
        const userId = decoded.sub;

        const [personResponse, postsResponse] = await Promise.all([
          api.get(`/person/${userId}`),
          api.get('/post?limit=200&page=1'),
        ]);

        setPerson(personResponse.data);
        setPosts(postsResponse.data.reverse());
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        router.push('/login');
      }

    };

    fetchData();
  }, [router]);

  const refreshPosts = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await api.get('/post?limit=200&page=1')
      setPosts(response.data.reverse());
    } catch (error) {
      console.error('Erro ao atualizar posts:', error);
    }
  };

  const handleDeletePost = async (postId: number) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      await PostService.deletePost(token, postId);
      setPosts((prev) => prev.filter((post) => post.id !== postId));
    } catch (error) {
      console.error('Erro ao deletar:', error);
    }
  };

  const handleUpdatePost = async () => {
    const token = localStorage.getItem('token');
    if (!token || !selectedPost) return;

    const { id, title, content, author } = selectedPost;

    try {
      await PostService.update(token, { id, title, content, author });

      setPosts((prev) =>
        prev.map((post) =>
          post.id === id ? { ...post, title, content } : post
        )
      );

      setIsEditModalOpen(false);
      setSelectedPost(null);
      alert('Post atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar post:', error);
    }
  };

  const handleEditClick = (post: Post) => {
    setSelectedPost(post);
    setIsEditModalOpen(true);
  };

  const handleViewPost = async (postId: number) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await api.get(`/post/${postId}`);

      setViewedPost(response.data);
      setViewPostModalOpen(true);
    } catch (error) {
      console.error('Erro ao buscar post:', error);
    }
  };

  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts
    .filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstPost, indexOfLastPost);

  const limitarTexto = (txt: string, limit: number) =>
    txt.length > limit ? txt.slice(0, limit) + '...' : txt;


  if (!person) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Wrapper>
        <Heading1>
          Olá, {person.name}!
        </Heading1>
        <SectionTitle />


        {person.professor && <AddPost person={person} onPostCreated={refreshPosts} />}
        <PostList>
          <SearchInput
            type="text"
            placeholder="Buscar post por palavra-chave..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <PostListContainer>
            {filteredPosts.map((post) => (
              <PostItem key={post.id}>
                {person.professor && (
                  <>
                    <DivItens>
                      <img onClick={() => handleEditClick(post)} src="/pen.svg" />
                      <img
                        onClick={() => {
                          if (window.confirm('Tem certeza que deseja excluir este post?')) {
                            handleDeletePost(post.id);
                          }
                        }}
                        src="/trash.svg"
                        alt="Excluir"
                      />

                    </DivItens>
                  </>
                )}
                <PostTitle>{limitarTexto(post.title, 70)}</PostTitle>
                <PostAuthor>{limitarTexto(
                  `Autor: ${post.author ? post.author.name + ' ' + post.author.surname : 'desconhecido'}`, 70)}
                </PostAuthor>
                <PostContent>{limitarTexto(post.content, 100)}</PostContent>
                <DivButton>
                  <Button onClick={() => handleViewPost(post.id)}>VER POST</Button>
                </DivButton>
              </PostItem>

            ))}
          </PostListContainer>
        </PostList>

        {totalPages > 1 && (
          <Pagination>
            <PageButton
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Anterior
            </PageButton>
            <span>{`Página ${currentPage} de ${totalPages}`}</span>
            <PageButton
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Próxima
            </PageButton>
          </Pagination>
        )}
      </Wrapper>

      {isEditModalOpen && selectedPost && (
        <ModalOverlay>
          <ModalContent>
            <Heading2>Editar Post</Heading2>
            <StyledInput placeholder='Titulo'
              type="text"
              value={selectedPost.title}
              onChange={(e) =>
                setSelectedPost({ ...selectedPost, title: e.target.value })
              }
            />
            <Textarea placeholder='Conteúdo'
              value={selectedPost.content}
              onChange={(e) =>
                setSelectedPost({ ...selectedPost, content: e.target.value })
              }
            />
            <ModalButtons>
              <Button onClick={() => setIsEditModalOpen(false)}>Cancelar</Button>
              <Button onClick={handleUpdatePost}>Salvar</Button>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}

      {viewPostModalOpen && viewedPost && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <Heading2>{viewedPost.title}</Heading2>
              <Paragraph><strong>Autor:</strong> {` ${viewedPost.author ? viewedPost.author.name + ' ' + viewedPost.author.surname : 'desconhecido'}`}</Paragraph>
              <Paragraph><strong>Última atualização:</strong> {new Date(viewedPost.updatedAt).toLocaleString()}</Paragraph>
              <CloseButton onClick={() => setViewPostModalOpen(false)}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              <Paragraph>{viewedPost.content}</Paragraph>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}

    </Container>
  );
}