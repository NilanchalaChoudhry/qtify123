import styles from "./Button.module.css";

const Button = ({ text, setFeedbackFlag = () => {} }) => {
  return (
    <button
      onClick={() => setFeedbackFlag(true)}
      className={styles.feedbackBtn}
    >
      {text}
    </button>
  );
};

export default Button;
