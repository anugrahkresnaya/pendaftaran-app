import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.section1}>
          <a 
            href="https://twitter.com/gunadarma_" 
            target="_blank"
            className={styles.fill}
          >
            <div className={styles.circle}>
              <FontAwesomeIcon 
                icon={faTwitter}  
                color="#960595"
                className={styles.icon}
              />
            </div>
          </a>
          <a 
            href="https://www.facebook.com/gunadarma/"
            target="_blank"
            className={styles.fill}
          >
            <div className={styles.circle}>
              <FontAwesomeIcon 
                icon={faFacebookF}  
                color="#960595"  
                className={styles.icon}
              />
            </div>
          </a>
          <a 
            href="https://www.instagram.com/gunadarma/"
            target="_blank"
            className={styles.fill}
          >
            <div className={styles.circle}>
              <FontAwesomeIcon 
                icon={faInstagram} 
                color="#960595"
                className={styles.icon}
              />
            </div>
          </a>
        </div>
        <div className={styles.section2}>
          <p>Copyright <span>Universitas Gunadarma</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;