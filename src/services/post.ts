const BASE_URL = 'http://localhost:3005/post';

export interface PostData {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export const PostService = {
  async getAll(token: string, page = 1, limit = 10) {
    const res = await fetch(`${BASE_URL}?page=${page}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  },

  async getById(token: string, id: number) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  },

  async create(token: string, data: Omit<PostData, 'id'>){
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  async update(token: string, postData: PostData) {
    const res = await fetch(BASE_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    });
  
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText);
    }
  
    return res.json(); 
  },

  async deletePost(token: string, id: number) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || 'Erro ao deletar o post');
    }
  }
};