export type Person = {
    id: number;
    name: string;
    surname: string;
    email: string;
    professor: boolean;
    createdAt: string;
    updatedAt: string;
  };
  
  export type PersonCreate = {
    name: string;
    surname: string;
    email: string;
    professor: boolean;
  };
  
  export type PersonUpdate = {
    id: number;
    name?: string;
    surname?: string;
    email?: string;
    professor?: boolean;
  };
  
  export type PersonsRequest = {
    data: Person[];
    total: number;
    page: number;
    limit: number;
  };