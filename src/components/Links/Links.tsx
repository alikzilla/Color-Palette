import styles from './links.module.css';

const Links = ({}) => {
  return (
    <div className={styles.linksBlock}>
      <p>Contact links:</p>
      <section className={styles.links}>
        <a className={styles.link} href="https://www.instagram.com/nuspekovalikhan/" target="_blank"><img src="Instagram_icon.png" alt="intagram" width={40} /></a>
        <a className={styles.link} href="https://t.me/alikhanchou" target="_blank"><img src="Telegram_logo.png" alt="telegram" width={40} /></a>
        <a className={styles.link} href="https://github.com/alikzilla" target="_blank"><img className={styles.github} src="github_icon.png" alt="" width={40} /></a>
        <a className={styles.link} href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B8%D1%85%D0%B0%D0%BD-%D0%BD%D1%83%D1%81%D0%BF%D0%B5%D0%BA%D0%BE%D0%B2-891805268/" target="_blank"><img src="LinkedIn_icon.png" alt="" width={40} /></a>
      </section>
    </div>
  )
};

export default Links;