import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/single-product");
  }, [navigate]);

  return (
    <section className={styles.homeInner}>
      <div className={styles.asgaardSofa1Parent}>
        <img
          className={styles.asgaardSofa1}
          loading="lazy"
          alt=""
          src="/asgaard-sofa-1@2x.png"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.newArrivalsWrapper}>
              <h3 className={styles.newArrivals}>New Arrivals</h3>
            </div>
            <div className={styles.asgaardSofaWrapper}>
              <h1 className={styles.asgaardSofa}>Asgaard sofa</h1>
            </div>
            <div className={styles.frameContainer}>
              <button
                className={styles.orderNowWrapper}
                onClick={onFrameButtonClick}
              >
                <div className={styles.orderNow}>Order Now</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
