import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Logo.module.css";
// import { useNavigate } from "react-router-dom";

const Logo = () => {
  let navigate = null;
  try {
    navigate = useNavigate();
  } catch (error) {
    console.warn("useNavigate must be used inside a Router");
  }

  return (
    <img
      onClick={() => navigate && navigate("/")}
      src={logo}
      alt="logo"
      className={styles.logo}
    />
  );
};

export default Logo;
