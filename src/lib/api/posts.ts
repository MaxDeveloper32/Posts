export interface PostHome {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

export interface PostsResponse {
  posts: PostHome[];
  total: number;
  page: number;
  limit: number;
}
