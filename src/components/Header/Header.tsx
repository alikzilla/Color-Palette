import styles from './header.module.css';

const Header = ({}) => {
  return (
    <section className={styles.header}>
      <img src="color-wheel.png" alt="Logo" width="60px" />
      <h1>Color Palette App</h1>
    </section>
  )
};

export default Header;