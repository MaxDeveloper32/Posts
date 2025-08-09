import styles from "./accordion-info.module.css";

const AccordionSkeleton = () => {
  return (
    <div>
      <ul className={styles["accordion-list"]}>
        {[...Array(3)].map((_, i) => (
          <li key={i} className={styles["accordion-list__item--skeleton"]}>
            <article className={styles["skeleton-article"]}>
              <div className={styles["skeleton-header"]}></div>
              <div className={styles["skeleton-button"]}></div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccordionSkeleton;
