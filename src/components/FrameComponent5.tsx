import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <section className={styles.homeInner}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.rocketSingleSeaterParent}>
            <h1 className={styles.rocketSingleSeater}>Rocket single seater</h1>
            <div className={styles.shopNowWrapper}>
              <h3 className={styles.shopNow}>Shop Now</h3>
            </div>
          </div>
          <div className={styles.rocketSingleSeater1Wrapper}>
            <img
              className={styles.rocketSingleSeater1}
              loading="lazy"
              alt=""
              src="/rocket-single-seater-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
