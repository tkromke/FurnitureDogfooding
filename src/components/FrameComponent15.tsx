import { FunctionComponent } from "react";
import styles from "./FrameComponent15.module.css";

const FrameComponent15: FunctionComponent = () => {
  return (
    <section className={styles.cartInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/frame-247@2x.png"
          />
        </div>
        <div className={styles.cartWrapper}>
          <h1 className={styles.cart}>Cart</h1>
        </div>
        <div className={styles.homeParent}>
          <div className={styles.home}>Home</div>
          <div className={styles.dashiconsarrowDownAlt2Wrapper}>
            <img
              className={styles.dashiconsarrowDownAlt2}
              loading="lazy"
              alt=""
              src="/dashiconsarrowdownalt2@2x.png"
            />
          </div>
          <div className={styles.cart1}>Cart</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent15;
