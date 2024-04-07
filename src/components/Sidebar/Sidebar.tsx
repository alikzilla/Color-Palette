import styles from './sidebar.module.css';
import Header from '../Header/Header';
import Links from '../Links/Links';

const Sidebar = ({}) => {
  return (
    <section className={styles.sidebar}>
      <Header />

      <p className={styles.info}>
      The Color Palette Explorer is a web app built with React and TypeScript, enabling users to explore and create color palettes.
      They can select colors, adjust their properties, and generate complementary schemes. Palettes can be saved and shared.
      </p>

      <Links />
    </section>
  )
}

export default Sidebar;