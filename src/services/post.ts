import { PostCreate, Post, PostUpdate } from "../types/post";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const postService = {
  async createPost(post: PostCreate): Promise<Post> {
    const response = await fetch(`${API_URL}/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error('Failed to create post');
    }
    return response.json();
  },

  async getPostById(id: number): Promise<Post> {
    const response = await fetch(`${API_URL}/post/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    return response.json();
  },

  async getAllPosts(page: number, limit: number): Promise<Post[]> {
    const response = await fetch(`${API_URL}/post?page=${page}&limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    
    return response.json();
  },

  async updatePost(post: PostUpdate): Promise<Post> {
    const response = await fetch(`${API_URL}/post`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error('Failed to update post');
    }
    return response.json();
  },

  async deletePost(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/post/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete post');
    }
  },
};