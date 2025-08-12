import styles from "./navigation.module.css";
import NavItem from "./nav-item/nav-item";

const NAV_ITEMS = [
  { name: "Contacts", path: "/contacts", id: 1 },
  { name: "Lorem", path: "#", id: 2 },
  { name: "Lorem_2", path: "#", id: 3 },
  { name: "Lorem__3", path: "#", id: 4 },
  { name: "Lorem___4", path: "#", id: 5 },
];

const Navigation = () => {
  return (
    <nav className={styles["header__nav"]}>
      <ul className={styles["header__nav-list"]}>
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
