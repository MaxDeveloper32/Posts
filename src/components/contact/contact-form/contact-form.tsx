import styles from "./contact-form.module.css";

const ContactForm = () => {
  return (
    <form action="" className={styles["feedback-form"]}>
      <h2 className={styles["feedback-form__title"]}>
        Остались вопросы? Задайте их нам!
      </h2>
      <p className={styles["feedback-form__description"]}>
        Мы обязательно свяжемся с вами в течение двух рабочих дней
      </p>
      <div className={styles["feedback-form__question"]}>
        <div  className={styles["feedback-form__inputs-block"]}>
          <input type="text" name="name" placeholder="Ваше имя"  className={styles["feedback-form__inputs"]}/>
          <input type="email" name="email" placeholder="Ваш e-mail"  className={styles["feedback-form__inputs"]}/>
        </div>

        <textarea className={styles["feedback-form__comment"]} name="comment" placeholder="Что вас интересует?"></textarea>
      </div>

      <button className={styles["feedback-form__send"]} > Отправить </button>
    </form>
  );
};
export default ContactForm;
