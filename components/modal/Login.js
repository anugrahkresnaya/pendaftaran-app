import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Login = ({ show, onClose, children, title }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  }

  const modalContent = show ? (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <h1>Login</h1>
          <button onClick={handleClose} className={styles.button}>
            <FontAwesomeIcon icon={faXmark} className={styles.icon} />
          </button>
        </div>
        <div className={styles.labelContainer}>
          <label>Username</label>
          <input type="text" className={styles.input} placeholder="Masukkan Username" />
        </div>
        <div className={styles.labelContainer}>
          <label>Password</label>
          <input type="password" className={styles.input} placeholder="Masukkan Password" />
        </div>
      </div>
    </div>
  ) : null;

  if (isShow) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal")
    );
  } else {
    return null;
  };
};

export default Login;