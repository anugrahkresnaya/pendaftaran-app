import styles from './Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <Image 
          src='/images/logo.png'
          height={60}
          width={350}
        />
        <ul className={styles.ul}>
          <li className={`${styles.li} ${styles.covid}`}>Info Covid-19</li>
          <li className={styles.li}>Home</li>
          <li className={styles.li}>Akreditasi Prodi</li>
          <li className={styles.li}>Prosedur umum</li>
          <li className={styles.li}>FAQ</li>
          <li className={styles.li}>Pendaftaran</li>
          <li className={styles.li}>Login</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;