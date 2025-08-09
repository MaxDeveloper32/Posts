import styles from "./comments.module.css";


const CommentsSkeleton = () => {
    return (
     <div className={styles.post__comments}>
        <ul className={styles["post__comments-list"]}>
          {[...Array(5)].map((_, i) => (
            <li key={i} className={styles["post__comments-item--skeleton"]}>
              <article>
                <div className={styles["post__user-info"]}>
                  <div className={styles["post__comment-avatar--skeleton"]} />
                  <div className={styles["post__username--skeleton"]} />
                </div>
                <div className={styles["post__text--skeleton"]} />
                <div className={styles["post__text--skeleton"]} style={{ width: '70%' }} />
              </article>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default CommentsSkeleton;