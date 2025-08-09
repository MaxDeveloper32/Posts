import { fetchPost } from "@/app/features/posts/api/getPostsId";
import Comments from "@/components/comments/comments";
import AccordionWrapper from "@/components/accordion-info/accordion-wrapper";
import PostContent from "@/components/post-content/post-content";
import { Post } from "@/lib/api/post";

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";


type ParamsType = Promise<{ id: string }>;

type PostPageProps = {
  params: ParamsType;
};

export async function generateMetadata({ params }: PostPageProps) {
  const { id } = await params;
  const post: Post = await fetchPost(id);

  return {
    title: `Пост #${post.id}: ${post.title}`,
    description: `Читайте статью "${post.title}" на нашем сайте.`,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPost(id),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <main className="global-main">
        <div className="wrapper">
          <PostContent id={id} />
          <Comments />
          <AccordionWrapper />

        
        </div>
      </main>
    </HydrationBoundary>
  );
}
