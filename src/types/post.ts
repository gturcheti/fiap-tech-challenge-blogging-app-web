export type Post = {
    id: number;
    author: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  };
  
  export type PostCreate = {
    author: number;
    title: string;
    content: string;
  };
  
  export type PostUpdate = {
    id: number;
    title?: string;
    content?: string;
  };
  
  export type PostsResponse = {
    data: Post[];
    total: number;
    page: number;
    limit: number;
  };