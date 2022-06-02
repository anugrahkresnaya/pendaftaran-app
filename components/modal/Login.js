import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

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
    <div className="modal-content">
      <div className="modal-header">
        <h1>Login</h1>
        <button onClick={handleClose}>Close</button>
      </div>
      <div>
        <h1>test</h1>
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