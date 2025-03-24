import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 920px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WelcomeMessage = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-bottom: .5rem;
  padding:2rem;
  
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
`;

export const PostList = styled.div`
  width: 100%; 
  background-color: ${({ theme }) => theme.colors.dark1};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow-y: scroll;
          height: 700px;
`;

export const PostListContainer = styled.div`
  width: 100%;
`;

export const PostItem = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.grey};
  display: flex;
 flex-direction: column;
`;

export const DivItens = styled.div`
        width: 100%;
    display: flex
;
    flex-direction: row;
    justify-content: flex-end;
    padding-bottom: .5rem;
`;

export const DivButton = styled.div`
        width: 150px;
        margin: 1rem 0px;
`;


export const PostTitle = styled.h3`
  font-size: 1.25rem;
  color:${({ theme }) => theme.colors.black};
  margin-bottom: 0.5rem;
`;

export const PostAuthor = styled.h2`
  font-size: 1.15rem;
  font-weight: 500;
  color:${({ theme }) => theme.colors.black};
  margin-bottom: 0.5rem;
`;

export const PostContent = styled.p`
  color:${({ theme }) => theme.colors.black};
  font-size: 1rem;
`;

export const LinkStyle = styled.a`
  margin:1rem;
`;

export const Pagination = styled.div`
  margin-top: 20px;
  color:#fff
`;

export const PageButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background: #e8135b;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin:1rem;

  &:disabled {
    background-color: #ccc;
    color:#838383;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.magenta};   
    
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.dark1};   
  padding: 2rem;
  margin: 10% auto;
  max-width: 600px;
  border-radius: 8px;
  display: flex;
  gap:1rem;
  flex-direction: column;
  position:relative;
  textarea{
      min-height: 250px;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
gap:3rem;
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size:30px;
  color: #999;
  cursor: pointer;
      position: absolute;
    right: 1rem;
    top: 1rem;

  &:hover {
    color: #333;
  }
`;

export const ModalBody = styled.div`
  font-size: 1rem;

  p {
    margin-bottom: 1rem;
  }
`;
export const Timestamps = styled.div`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #666;

  p {
    margin: 0.25rem 0;
  }
`;

export const SearchInput = styled.input`
   padding: .7rem;
  border-radius: 2rem;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.dark1};
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.dark2};
width:100%;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.magent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.dark1};
        text-transform: uppercase;
  }
  
`;