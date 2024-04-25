import { FunctionComponent } from "react";
import styles from "./GroupComponent6.module.css";

const GroupComponent6: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.align}>
        <div className={styles.cousinSubtree}>
          <div className={styles.home}>Home</div>
          <div className={styles.depthLevel}>
            <img
              className={styles.dashiconsarrowUpAlt2}
              loading="lazy"
              alt=""
              src="/dashiconsarrowupalt2@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.shopWrapper}>
        <div className={styles.shop}>Shop</div>
      </div>
      <div className={styles.divider}>
        <img
          className={styles.dashiconsarrowUpAlt21}
          loading="lazy"
          alt=""
          src="/dashiconsarrowupalt2@2x.png"
        />
      </div>
      <div className={styles.cousinTriple}>
        <div className={styles.branchCluster} />
        <div className={styles.asgaardSofaWrapper}>
          <div className={styles.asgaardSofa}>Asgaard sofa</div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent6;
