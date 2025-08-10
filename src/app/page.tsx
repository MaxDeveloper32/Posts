import PreviewWelcome from "@/components/preview-welcome/preview-welcome";
import { fetchPosts } from "./features/posts/api/getPosts";
import PostsList from "@/components/posts-list/posts-list";


const Home = async () => {
  const initialPosts = await fetchPosts({ pageParam: 1 });

  return (
    <main className="main-section">
      <section>
        <div className="wrapper">
          <PreviewWelcome />
          <PostsList initialData={initialPosts} />
        </div>
      </section>
    </main>
  );
};

export default Home;
