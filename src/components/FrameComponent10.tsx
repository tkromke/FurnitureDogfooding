import { FunctionComponent } from "react";
import styles from "./FrameComponent10.module.css";

const FrameComponent10: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/frame-247@2x.png"
        />
      </div>
      <h1 className={styles.shop}>Shop</h1>
      <div className={styles.frameContainer}>
        <div className={styles.homeParent}>
          <div className={styles.home}>Home</div>
          <div className={styles.dashiconsarrowDownAlt2Wrapper}>
            <img
              className={styles.dashiconsarrowDownAlt2}
              alt=""
              src="/dashiconsarrowdownalt2@2x.png"
            />
          </div>
          <div className={styles.shop1}>Shop</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent10;
