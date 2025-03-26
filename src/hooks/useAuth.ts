import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  sub: number;
  username: string;
  admin: boolean;
  exp: number;
}

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<DecodedToken | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('token');

    if (stored) {
      setToken(stored);
      const decoded = jwtDecode<DecodedToken>(stored);
      console.log('Token decodificado:', decoded);
      setUser(decoded);
    }
  }, []);

  const isAuthenticated = !!token;

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return {
    token,
    user,
    isProfessor: user?.admin === true,
    isLogged: !!user,
    isAuthenticated,
    logout,
  };
};
