import { PostHome } from "@/lib/api/posts";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

type ApiResponse = {
  data: PostHome[];
  nextCursor: number | null;
}

export const fetchPosts = async ({ pageParam = 1 }): Promise<ApiResponse> => {
  const res = await fetch(
    `https://6829d0686075e87073a79305.mockapi.io/homePosts/?page=${pageParam}&limit=10`
  );
  if (!res.ok) throw new Error("Ошибка загрузки постов");
  const data = await res.json();
  return {
    data, 
    nextCursor: pageParam + 1
  };
};

export function useInfinitePosts(initialData?: ApiResponse) {
  return useInfiniteQuery< ApiResponse, Error, InfiniteData<ApiResponse>, ["posts"], number >({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage?.data || lastPage.data.length === 0) {
        return undefined;
      }
      return lastPage.nextCursor;
    },
    initialData: initialData ? { pages: [initialData], pageParams: [1] } : undefined,
    staleTime: 60 * 1000, 
    gcTime: 10 * 60 * 1000,
  });
}
