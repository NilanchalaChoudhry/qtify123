import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import Search from "../Search/Search";

const NavBar = ({ data, setFeedbackFlag }) => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search data={data} placeholder="Search a song of your choice" />
      <Button text="Give Feedback" setFeedbackFlag={setFeedbackFlag} />
    </nav>
  );
};

export default NavBar;
