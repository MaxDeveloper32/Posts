import { PostHome } from "@/lib/api/posts";
import Image from "next/image";
import Link from "next/link";

type ItemProps = {
  post: PostHome;
};

const Item = ({ post }: ItemProps) => {
  return (
    <>
      <li className="post-list__item">
        <div className="post-list__post ">
          <h3>{post.title}</h3>
          <p className="post-list__content">{post.content}</p>

          <div className="posts-list__control">
            <Link
              className="post-list__more-detailed"
              href={`/posts/${post.id}`}
            >
              More detailed
            </Link>
          </div>
        </div>

        <Image
          src="/main-image.webp"
          className="post-list__image"
          width={700}
          height={500}
          alt="Game background"
        />
      </li>
    </>
  );
};

export default Item;
