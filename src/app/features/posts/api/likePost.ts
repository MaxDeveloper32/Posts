import { Post } from "@/lib/api/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type ButtonLikeProps = {
  id: string;
  isLike: boolean;
};

export const useLikePost = () => {
  const queryClient = useQueryClient();

  return useMutation<Post, Error, ButtonLikeProps>({
    mutationFn: async ({ id, isLike }: ButtonLikeProps) => {
      const currentPost = queryClient.getQueryData<Post>(["post", id]);
      const updatedPost = { ...currentPost, isLike: !isLike };

      const response = await fetch(
        `https://6829d0686075e87073a79305.mockapi.io/posts/${id}`,
        {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(updatedPost),
        }
      );

      if (!response.ok) throw new Error("Ошибка при установке лайка");

      const data: Post = await response.json();
      return data;
    },
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["post", id] });
    },
  });
};
