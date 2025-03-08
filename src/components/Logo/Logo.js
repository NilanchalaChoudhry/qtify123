import logo from "../../assets/logo.png";
import styles from "./Logo.module.css";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <img
      onClick={() => navigate("/")}
      src={logo}
      alt="logo"
      className={styles.logo}
    />
  );
};

export default Logo;
