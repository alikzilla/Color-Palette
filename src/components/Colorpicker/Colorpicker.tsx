import { ColorPicker, useColor } from "react-color-palette";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "react-color-palette/css";
import styles from './Colorpicker.module.css';
import SaveColors from "../SaveColors/SaveColors";
import MatchingColors from "../MatchingColors/MatchingColors"; // Corrected filename

const Colorpicker = () => {
  const [color, setColor] = useColor("#ff0000");

  return (
    <div className={styles.colorPickerBlock}>
      <div className={styles.colorPicker}>
        <ColorPicker
          color={color}
          onChange={setColor}
          height={500}
        />
      </div>
      <div className={styles.control}>
        <CopyToClipboard text={color.hex} onCopy={() => {alert("Color HEX copied!")}}>
          <div className={styles.colorOutput} style={{ backgroundColor: color.hex }}>
            <p style={{fontSize: 20}}>{color.hex}</p>
            <h1>Black</h1>
            <h1 style={{color: 'white'}}>White</h1>
          </div>
        </CopyToClipboard>

        <SaveColors color={color.hex} />
        
      </div>
      <div className={styles.matchingColors}>
        <MatchingColors color={color} />
      </div>
    </div>
  );
};

export default Colorpicker;
