import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GroupComponent.module.css";

const GroupComponent: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/single-product");
  }, [navigate]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.topPicksForYouWrapper}>
            <h1 className={styles.topPicksFor}>Top Picks For You</h1>
          </div>
          <div className={styles.findABright}>
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
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
          <div
            className={styles.maskGroupGroup}
            onClick={onFrameContainer1Click}
          >
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
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent1}>
            <div className={styles.viewMoreWrapper}>
              <div className={styles.viewMore}>View More</div>
            </div>
            <div className={styles.frameItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
