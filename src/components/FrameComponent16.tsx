import { FunctionComponent } from "react";
import styles from "./FrameComponent16.module.css";

const FrameComponent16: FunctionComponent = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.div}>1</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.div1}>2</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameInner} />
          <div className={styles.div2}>3</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.next}>Next</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent16;
