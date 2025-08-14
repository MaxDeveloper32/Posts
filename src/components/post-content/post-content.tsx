"use client";
import { usePost } from "@/app/features/posts/api/getPostsId";
import Image from "next/image";
import ButtonLike from "../button-like/button-like";
import styles from "./post-content.module.css";
import TextContent from "../text-content/text-contet";


type PostContentProps = {
  id: string;
};

const IMAGES = ['/1.webp', '/2.webp', '/3.jpg', '/4.webp']

const PostContent = ({ id }: PostContentProps) => {
  const { data: post } = usePost(id);
  if (!post) return <div>Error .... </div>;

   
  return (
    <section className={styles.post__wrapper}>
      <div className={styles.post__main}>
        <h1 className={styles.post__title}>{post.title}</h1>
        <Image
          className={`${styles["post__main-image"]} ${styles["post__image--style"]}`}
          src='/post-img.webp'
          width={900}
          height={500}
          priority
          alt={post.title} 
        />
      </div>

      <div className={styles.post__description}>
        <h2> The text of the post </h2>
          <TextContent />
         <div className={styles.post__likes}>
          <p>Понравилась статья ? </p>
          <ButtonLike id={post.id} isLike={post.isLike} />
      </div>
      </div>

      <ul className={styles.post__images}>
        {IMAGES.map((image) => (
          <li key={image} className={styles.post__item}>
            <Image
              className={styles["post__image-post"]}
              src={image}
              width={500}
              height={400}
              loading="lazy"
              alt={`${post.title} content`}
              
            />
            <p className={styles.image__caption}>Постер к игре</p>
          </li>
        ))}
      </ul>

     
    </section>
  );
};

export default PostContent;
