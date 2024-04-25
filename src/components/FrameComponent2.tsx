import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  frame230?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  frame230,
}) => {
  return (
    <div className={styles.coralGablesFL}>
      <img
        className={styles.coralGablesFLChild}
        loading="lazy"
        alt=""
        src={frame230}
      />
      <div className={styles.frameParent}>
        <div className={styles.goingAllInWithMillennialDParent}>
          <div className={styles.goingAllInWith}>
            Going all-in with millennial design
          </div>
          <div className={styles.meubelHouseName}>
            <div className={styles.readMore}>Read More</div>
          </div>
        </div>
        <div className={styles.mainNavigationBarParent}>
          <div className={styles.mainNavigationBar}>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <div className={styles.min}>5 min</div>
          </div>
          <div className={styles.sidebarArea}>
            <img
              className={styles.uilcalenderIcon}
              alt=""
              src="/uilcalender.svg"
            />
            <div className={styles.thOct2022}>12th Oct 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
