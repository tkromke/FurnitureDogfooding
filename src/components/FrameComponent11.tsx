import { FunctionComponent } from "react";
import styles from "./FrameComponent11.module.css";

const FrameComponent11: FunctionComponent = () => {
  return (
    <div className={styles.singleProductInner}>
      <header className={styles.frameParent}>
        <nav className={styles.homeParent}>
          <div className={styles.home}>Home</div>
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
      </header>
    </div>
  );
};

export default FrameComponent11;
