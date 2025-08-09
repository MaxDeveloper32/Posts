"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";
import clsx from "clsx";

const NAV_ITEMS = [
  { name: "Contacts", path: "/contacts", id: 1 },
  { name: "Lorem", path: "#", id: 2 },
  { name: "Lorem_2", path: "#", id: 3 },
  { name: "Lorem__3", path: "#", id: 4 },
  { name: "Lorem___4", path: "#", id: 5 },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={styles["header__nav"]}>
      <ul className={styles["header__nav-list"]}>
        {NAV_ITEMS.map((item) => (
          <li
            key={item.id}
            className={clsx(styles["header__nav-item"], {
              [styles.active]: pathname === item.path,
            })}
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
