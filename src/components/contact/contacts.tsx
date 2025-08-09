import Link from "next/link";
import ContactForm from "./contact-form/contact-form";
import styles from "./contacts.module.css";

const ContactsUs = [
  {
    id: "1",
    city: "Новороссийск",
    phone: "+7 (923) 465 – 01 – 41",
    email: "digitalPlanetNR@mail.ru",
  },

  {
    id: "2",
    city: "Москва",
    phone: "+7 (495) 855 – 24 – 19",
    email: "digitalPlanetMoscow@mail.ru",
  },

  {
    id: "3",
    city: "Саратов",
    phone: "+7 (942) 221 – 21 – 78",
    email: "digitalPlanetSaratov@mail.ru",
  },
];

const Contacts = () => {
  return (
    <div className={`${styles["contacts"]} wrapper`}>
      <h1 className={styles["contacts__title"]}>Контакты</h1>

      <section className={styles["contacts__feedback-block"]}>
        <div className={styles["contacts__us"]}>
          <ul className={styles["contacts__list"]}>
            {ContactsUs.map((contact) => (
              <li key={contact.id} className={styles["contacts__item"]}>
                <p className={styles["contacts__city"]}>{contact.city}</p>
                <Link
                  href={`tel:${contact.phone}`}
                  className={styles["contacts__link"]}
                >
                  {contact.phone}
                </Link>
                
                <Link
                  href={`mailto:${contact.email}`}
                  className={styles["contacts__link"]}
                >
                  {contact.email}
                </Link>
              </li>
            ))}
          </ul>

          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contacts;
