"use client";
import { useComments } from "@/app/features/posts/api/get-comments";
import CommentsSkeleton from "./comments-skeleton";
import TextPost from "../text-post/text-post";
import { format, isThisYear } from "date-fns";
import { ru } from "date-fns/locale";
import styles from "./comments.module.css";
import Image from "next/image";

const formatSmartDate = (dateString: string) => {
  const date = new Date(dateString);

  return isThisYear(date)
    ? format(date, "d MMMM в HH:mm", { locale: ru })
    : format(date, "d MMMM yyyy в HH:mm", { locale: ru });
};

const Comments = () => {
  const { data: comments, isLoading } = useComments();

  if (isLoading) return <CommentsSkeleton />;
  if (!comments?.length) return;

  return (
    <div className={styles.post__comments}>
      <ul className={styles["post__comments-list"]}>
        {comments.map((comment) => (
          <li key={comment.id} className={styles["post__comments-item"]}>
            <article>
              <div className={styles["post__user-info"]}>
                <Image
                  className={styles["post__comment-avatar"]}
                  src={comment.avatar}
                  width={70}
                  height={70}
                  loading="lazy"
                  alt="User comment Avatar"
                />
                <span>{comment.name}</span>
                <time dateTime={comment.dataPost}>
                  {formatSmartDate(comment.dataPost)}
                </time>
              </div>

              <TextPost />
              <div className={styles["post__count-like"]}>
                <p> Лайк комментариев: {comment.likes} </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
