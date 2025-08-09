
import { Post } from "@/lib/api/post";
import { useQuery } from "@tanstack/react-query";

export const fetchPost = async (id: string): Promise<Post> => {
  const res = await fetch(`https://6829d0686075e87073a79305.mockapi.io/posts/${id}`);
  if (!res.ok) throw new Error(`Ошибка загрузки поста ${id}`);
  return res.json();
};

export function usePost(id: string) {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPost(id),
    enabled: !!id,
    staleTime: 10000,
  });
}
