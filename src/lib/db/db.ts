export type PostMeta = {
  id: number;
  likes: number;
};

const initialPostMeta: PostMeta[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  likes: 0,
}));

export const postMeta: PostMeta[] = [...initialPostMeta];