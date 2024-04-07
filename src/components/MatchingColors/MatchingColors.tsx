import styles from './matchingColors.module.css';
import { FC } from 'react';

import { IColor } from 'react-color-palette';
import CopyToClipboard from 'react-copy-to-clipboard';

interface ColorsProps {
  color: IColor,
}

interface RgbProps {
  r: number;
  g: number;
  b: number;
}

const MatchingColors: FC<ColorsProps> = ({ color }) => {

  function rgbToHsl(r: number, g: number, b: number): number[] {
    r /= 255, g /= 255, b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, l];
}

function hslToRgb(h: number, s: number, l: number): RgbProps {
    let r = 0, g = 0, b = 0;

    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p: number, q: number, t: number): number => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3) * 255;
        g = hue2rgb(p, q, h) * 255;
        b = hue2rgb(p, q, h - 1 / 3) * 255;
    }

    return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
}


  
function findMatchingColors(color: RgbProps, numMatches: number): RgbProps[] {
  const [h, s, l] = rgbToHsl(color.r, color.g, color.b);
  const matchingColors: RgbProps[] = [];

  for (let i = 0; i < numMatches; i++) {
      const hue = (h + (i + 1) * 0.1) % 1;
      const lightness = l;
      const saturation = s;

      const { r, g, b } = hslToRgb(hue, saturation, lightness);
      matchingColors.push({ r, g, b });
  }

  return matchingColors;
}


  const originalColor = color.rgb;
  const numMatches = 5;

  const matchingColors = findMatchingColors(originalColor, numMatches);

  return (
    <section className={styles.matchingColors}>
      <div className={styles.originalColor} style={{ backgroundColor: `rgb(${originalColor.r}, ${originalColor.g}, ${originalColor.b})` }}></div>
      <div className={styles.matchingColorContainer}>
        {matchingColors.map((color, index) => (
          <CopyToClipboard text={`rgb(${color.r}, ${color.g}, ${color.b})`} onCopy={() => {alert("Copied!")}}>
            <div key={index} className={styles.matchingColor} style={{ backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})` }}></div>
          </CopyToClipboard>
        ))}
      </div>
    </section>
  );
}

export default MatchingColors;
