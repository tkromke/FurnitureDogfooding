import { FunctionComponent } from "react";
import styles from "./FrameComponent13.module.css";

const FrameComponent13: FunctionComponent = () => {
  return (
    <section className={styles.checkoutInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/frame-247@2x.png"
          />
        </div>
        <h1 className={styles.checkout}>Checkout</h1>
        <div className={styles.frameContainer}>
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
            <div className={styles.checkout1}>Checkout</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent13;
