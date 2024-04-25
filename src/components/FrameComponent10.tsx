import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent10.module.css";

const FrameComponent10: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/frame-247@2x.png"
        />
      </div>
      <h1 className={styles.shop}>Shop</h1>
      <div className={styles.frameContainer}>
        <div className={styles.homeParent}>
          <div className={styles.home} onClick={onHomeText1Click}>
            Home
          </div>
          <div className={styles.dashiconsarrowDownAlt2Wrapper}>
            <img
              className={styles.dashiconsarrowDownAlt2}
              alt=""
              src="/dashiconsarrowdownalt2@2x.png"
            />
          </div>
          <div className={styles.shop1}>Shop</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent10;
