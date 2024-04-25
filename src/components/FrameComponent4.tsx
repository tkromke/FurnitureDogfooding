import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.group1901Wrapper}>
            <img
              className={styles.group1901}
              loading="lazy"
              alt=""
              src="/group-190-1@2x.png"
            />
          </div>
          <div className={styles.sideTableParent}>
            <h1 className={styles.sideTable}>Side table</h1>
            <div
              className={styles.viewMoreWrapper}
              onClick={onFrameContainerClick}
            >
              <h3 className={styles.viewMore}>View More</h3>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.cloudSofaThreeSeaterOttoWrapper}>
            <img
              className={styles.cloudSofaThreeSeaterOtto}
              loading="lazy"
              alt=""
              src="/cloud-sofa-three-seater--ottoman-3-1@2x.png"
            />
          </div>
          <div className={styles.sideTableGroup}>
            <h1 className={styles.sideTable1}>Side table</h1>
            <div
              className={styles.viewMoreContainer}
              onClick={onFrameContainer2Click}
            >
              <h3 className={styles.viewMore1}>View More</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
