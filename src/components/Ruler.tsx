import { useMemo } from "react";
import styles from "./Ruler.module.scss";

interface RulerProps {
  value: number;
  max: number;
  setValue(value: number): void;
}

const Ruler = ({ value, max, setValue }: RulerProps) => {
  const unit = 10;

  const scales = useMemo(
    () =>
      [...Array(Math.floor(max / unit))].map((_, index) => (index + 1) * unit),
    [max]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.scales}>
        <div>1</div>
        {scales.map((x) => (
          <div key={x}>{x}</div>
        ))}
      </div>
      <input
        type="range"
        value={value}
        step={1}
        min={1}
        max={max}
        className={styles.ruler}
        onChange={(e) => setValue(parseInt(e.currentTarget.value))}
      />
    </div>
  );
};

export default Ruler;
