"use client";
import { useState } from "react";
import styles from "./accordion-info.module.css";

const accordionData = [
  {
    id: 1,
    title: "Заголовок 1",
    contents: ["PC", "X-box", "PS4", "PS5"],
  },
  {
    id: 2,
    title: "Заголовок 2",
    contents: ["PC", "X-box", "PS4", "PS5"],
  },
  {
    id: 3,
    title: "Заголовок 3",
    contents: ["PC", "X-box", "PS4", "PS5"],
  },
];

type AccordionItemProps = {
  title: string;
  contents: string[];
};

type ItemProps = {
  item: AccordionItemProps;
};

const AccordionItem = ({ item }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={`${styles["accordion-list__item"]} ${ isOpen ? styles["accordion-list__item--open"] : ""}`}>
      <article className={styles["accordion-list__prev-content"]}>
        <h3 className={styles["accordion-list__title"]}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, sapiente!
        </h3>
        <button
          className={`${styles["accordion-list__toggle"]}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className={styles["accordion-list__toggle-icon"]}
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.688 10.784L10.144 10.784L10.144 0.367998L12.928 0.367998L12.928 10.784L22.384 10.784L22.384 13.472L12.928 13.472L12.928 23.936L10.144 23.936L10.144 13.472L0.688 13.472L0.688 10.784Z"
              fill="white"
            />
          </svg>
        </button>
      </article>

      <ul className={styles["accordion-item__content"]}>
        {item.contents.map((content) => (
          <li key={content} className={styles["accordion-item__content-item"]}>
            <p>{content}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam
              cumque possimus magni necessitatibus corrupti sapiente hic modi
              tempora sequi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde natus ut laborum obcaecati, fugiat aut facilis, 
              quia facere aliquam animi et libero voluptatem quis sequi eum! Saepe obcaecati magni harum!
            </p>
          </li>
        ))}
      </ul>
      
    </li>
  );
};

const Accordion = () => {
  return (
    <div>
      <ul className={styles["accordion-list"]}>
        {accordionData.map((item) => (
          <AccordionItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
