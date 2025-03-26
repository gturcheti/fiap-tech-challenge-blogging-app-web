'use client';

import { useRouter } from 'next/navigation';
import {
  HeaderContainer,
  Nav,
  ButtonOut
} from './styles';

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    router.push('/login');
  };

  return (
    <HeaderContainer>
      <Nav>
        <ButtonOut onClick={handleLogout}>Sair</ButtonOut>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
