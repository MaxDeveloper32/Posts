"use client";
import { useEffect, useRef } from "react";
import { useInfinitePosts } from "@/app/features/posts/api/getPosts";
import { PostHome } from "@/lib/api/posts";
import Item from "./item/item";
import "./posts-list.css";

type ApiResponse ={
  data: PostHome[];
  nextCursor: number | null;
}

type PostsListProps = {
  initialData?: ApiResponse;
};

const PostsList = ({ initialData }: PostsListProps) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfinitePosts(initialData);
  const loaderRef = useRef<HTMLDivElement>(null);
  const allPosts = data?.pages.flatMap((page) => page.data) || [];


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div>
      <ul className="posts-list">
        {allPosts.map((post) => (
          <Item key={post.id} post={post} />
        ))}
      </ul>

      <div ref={loaderRef} className="loader">
        {isFetchingNextPage
          ? "Загрузка..."
          : hasNextPage
          ? "Прокрутите ниже"
          : "Нет больше постов"}
      </div>
    </div>
  );
};

export default PostsList;
