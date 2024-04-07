import styles from './mainblock.module.css';
import Colorpicker from '../Colorpicker/Colorpicker'; 

const Mainblock = ({}) => {
  return (
    <section className={styles.mainblock}>
      <Colorpicker />
    </section>
  )
}

export default Mainblock;