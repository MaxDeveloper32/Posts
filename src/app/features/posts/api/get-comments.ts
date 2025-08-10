import { useQuery } from "@tanstack/react-query";

type Comment = {
  name: string;
  text: string;
  id: string;
  avatar: string;
  likes: number;
  dataPost: string;
};

export const fetchPost = async (): Promise<Comment[]> => {
  const res = await fetch(
    `https://api.npoint.io/2b1cdf05a0e1447abf9b`
  );
  if (!res.ok) throw new Error(`Ошибка загрузки comments `);
  return res.json();
};

export function useComments() {
  return useQuery({
    queryKey: ["comments"],
    queryFn: () => fetchPost(),
  });
}
