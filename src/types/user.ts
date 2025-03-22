export type User = {
    id: number;
    username: string;
    password: string;
    person: number;
    createdAt: string;
    updatedAt: string;
  };
  
  export type UserCreate = {
    username: string;
    password: string;
  };
  
  export type UserUpdate = {
    id: number;
    username?: string;
    password?: string;
    person?: number;
  };
  
  export type UserDelete = {
    id: number;
    username?: string;
    password?: string;
    person?: number;
  };
  
  export type UsersRequest = {
    data: User[];
    total: number;
    page: number;
    limit: number;
  };