import { useState } from 'react';
import { FC } from 'react';
import styles from './savecolors.module.css'
import CopyToClipboard from 'react-copy-to-clipboard';

interface ColorProps {
  color: string,
}

const Savecolors: FC<ColorProps> = ({ color }) => {
  const [colors, setColors] = useState<string[]>([]);

  const addColor = (color: string) => {
    if (colors.length < 25) {
      setColors((prevColors) => [...prevColors, color]);
    }
  };

  const removeColor = () => {
    let updatedColors = [...colors];
    updatedColors.splice(updatedColors.length - 1, 1);
    setColors(updatedColors);
  }

  return (
    <section className={styles.saveColors}>
      <div className={styles.controls}>
        <button className={`${styles.button} ${styles.addButton}`} onClick={() => addColor(color)}>+</button>
        <button className={`${styles.button} ${styles.removeButton}`} onClick={() => removeColor()}>-</button>
        <p>Max number colors 25</p>
      </div>
      <CopyToClipboard text={color} onCopy={() => {alert("Color HEX copied!")}}>
        <div className={styles.colorsList}>
          {colors.map((color, index) => (
            <div key={index} className={styles.colorBlock} style={{backgroundColor: color}}></div>
          ))}
        </div>
      </CopyToClipboard>
    </section>
  )
}

export default Savecolors;
