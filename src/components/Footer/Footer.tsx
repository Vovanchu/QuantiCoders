import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>MyCompany</h2>
        </div>

        <div className={styles.links}>
          <a href="#about">Про нас</a>
          <a href="#services">Послуги</a>
          <a href="#contact">Контакти</a>
          <a href="#privacy">Політика конфіденційності</a>
        </div>

        <div className={styles.social}>
          <a href="#" aria-label="Facebook">
            FB
          </a>
          <a href="#" aria-label="Twitter">
            TW
          </a>
          <a href="#" aria-label="Instagram">
            IG
          </a>
        </div>

        <div className={styles.copy}>
          &copy; {new Date().getFullYear()} MyCompany. Всі права захищені.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
