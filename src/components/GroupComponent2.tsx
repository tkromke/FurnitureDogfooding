import { FunctionComponent } from "react";
import styles from "./GroupComponent2.module.css";

const GroupComponent2: FunctionComponent = () => {
  return (
    <section className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.systemUiconsfilteringWrapper}>
                <img
                  className={styles.systemUiconsfiltering}
                  alt=""
                  src="/systemuiconsfiltering.svg"
                />
              </div>
              <div className={styles.filterParent}>
                <div className={styles.filter}>Filter</div>
                <div className={styles.cigridBigRoundWrapper}>
                  <img
                    className={styles.cigridBigRoundIcon}
                    loading="lazy"
                    alt=""
                    src="/cigridbiground.svg"
                  />
                </div>
                <input className={styles.frameInput} type="checkbox" />
              </div>
            </div>
          </div>
          <div className={styles.frameItem} />
          <div className={styles.showing116Of32ResultsWrapper}>
            <div className={styles.showing116Of}>
              Showing 1–16 of 32 results
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameParent1}>
          <div className={styles.showWrapper}>
            <div className={styles.show}>Show</div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <div className={styles.div}>16</div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.sortByWrapper}>
            <div className={styles.sortBy}>Sort by</div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
            <div className={styles.default}>Default</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent2;
