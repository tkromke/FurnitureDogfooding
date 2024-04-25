import { FunctionComponent } from "react";
import styles from "./FrameComponent7.module.css";

const FrameComponent7: FunctionComponent = () => {
  return (
    <section className={styles.shopInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.maskGroupParent}>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group@2x.png"
            />
            <div className={styles.graniteSquareSideTableWrapper}>
              <div className={styles.graniteSquareSide}>
                Granite square side table
              </div>
            </div>
            <div className={styles.rs25880000Wrapper}>
              <div className={styles.rs25880000}>Rs. 258,800.00</div>
            </div>
          </div>
          <div className={styles.maskGroupGroup}>
            <img
              className={styles.maskGroupIcon1}
              loading="lazy"
              alt=""
              src="/mask-group-1@2x.png"
            />
            <div className={styles.asgaardSofaWrapper}>
              <div className={styles.asgaardSofa}>Asgaard sofa</div>
            </div>
            <div className={styles.rs25000000Wrapper}>
              <div className={styles.rs25000000}>Rs. 250,000.00</div>
            </div>
          </div>
          <div className={styles.maskGroupContainer}>
            <img
              className={styles.maskGroupIcon2}
              loading="lazy"
              alt=""
              src="/mask-group-2@2x.png"
            />
            <div className={styles.mayaSofaThreeSeaterWrapper}>
              <div className={styles.mayaSofaThree}>Maya sofa three seater</div>
            </div>
            <div className={styles.rs11500000Wrapper}>
              <div className={styles.rs11500000}>Rs. 115,000.00</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <img
              className={styles.maskGroupIcon3}
              loading="lazy"
              alt=""
              src="/mask-group-3@2x.png"
            />
            <div className={styles.outdoorSofaSetWrapper}>
              <div className={styles.outdoorSofaSet}>Outdoor sofa set</div>
            </div>
            <div className={styles.rs24400000Wrapper}>
              <div className={styles.rs24400000}>Rs. 244,000.00</div>
            </div>
          </div>
        </div>
        <div className={styles.freeShipping}>
          <div className={styles.frameContainer}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.div}>1</div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.div1}>2</div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.div2}>3</div>
            </div>
            <button className={styles.groupButton}>
              <div className={styles.rectangleDiv} />
              <div className={styles.next}>Next</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
