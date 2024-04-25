import { FunctionComponent } from "react";
import styles from "./FrameComponent14.module.css";

const FrameComponent14: FunctionComponent = () => {
  return (
    <header className={styles.checkoutContainer}>
      <div className={styles.frameParent}>
        <nav className={styles.homeParent}>
          <a className={styles.home}>Home</a>
          <div className={styles.shop}>Shop</div>
          <div className={styles.about}>About</div>
          <div className={styles.contact}>Contact</div>
        </nav>
        <div className={styles.mdiaccountAlertOutlineParent}>
          <img
            className={styles.mdiaccountAlertOutlineIcon}
            loading="lazy"
            alt=""
            src="/mdiaccountalertoutline.svg"
          />
          <img
            className={styles.akarIconssearch}
            loading="lazy"
            alt=""
            src="/akariconssearch.svg"
          />
          <img
            className={styles.akarIconsheart}
            loading="lazy"
            alt=""
            src="/akariconsheart.svg"
          />
          <img
            className={styles.antDesignshoppingCartOutliIcon}
            loading="lazy"
            alt=""
            src="/antdesignshoppingcartoutlined.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default FrameComponent14;
