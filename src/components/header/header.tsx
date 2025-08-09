import Link from "next/link";
import Navigation from "./navigation/navigation";
import styles from "./header.module.css";
import UserProfile from "./user-profile/user-profile";

const Header = async () => {
  return (
    <header className={styles.header}>
      <div className={`${styles["header__wrapper"]} wrapper`}>
        <Link href="/">
          <div className={styles.header__logo}>LOGO Site</div>
        </Link>
       
        <Navigation />
        <UserProfile />
      </div>
    </header>
  );
};

export default Header;
