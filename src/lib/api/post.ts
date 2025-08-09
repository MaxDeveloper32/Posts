type Comments = {
  name: string;
  text: string;
  avatar: string;
  likes: number;
  dataPost: string;
  id: string;
};

export type Post = {
  id: number;
  title: string;
  mainImage: string;
  images: string[];
  isLike: boolean;
  comments: Comments[];
};
