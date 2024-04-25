import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  /** Style props */
  frameNavBackgroundColor?: CSSProperties["backgroundColor"];
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  frameNavBackgroundColor,
}) => {
  const frameHeaderStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: frameNavBackgroundColor,
    };
  }, [frameNavBackgroundColor]);

  return (
    <header className={styles.fRAMEHOMESHOPABParent} style={frameHeaderStyle}>
      <nav className={styles.fRAMEHOMESHOPAB}>
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
  );
};

export default FrameComponent6;
