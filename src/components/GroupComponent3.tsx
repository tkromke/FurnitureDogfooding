import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GroupComponent3.module.css";

const GroupComponent3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/single-product");
  }, [navigate]);

  return (
    <section className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.relatedProductsWrapper}>
        <h1 className={styles.relatedProducts}>Related Products</h1>
      </div>
      <div className={styles.outputAggregator}>
        <div className={styles.maskGroupParent}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group2@2x.png"
          />
          <div className={styles.variableHolder}>
            <div className={styles.trentonModularSofa3}>
              Trenton modular sofa_3
            </div>
          </div>
          <div className={styles.rs2500000Wrapper}>
            <div className={styles.rs2500000}>Rs. 25,000.00</div>
          </div>
        </div>
        <div className={styles.maskGroupGroup} onClick={onFrameContainer1Click}>
          <img
            className={styles.maskGroupIcon1}
            loading="lazy"
            alt=""
            src="/mask-group-11@2x.png"
          />
          <div className={styles.graniteDiningTableWithDiniWrapper}>
            <div className={styles.graniteDiningTable}>
              Granite dining table with dining chair
            </div>
          </div>
          <div className={styles.rs2500000Container}>
            <div className={styles.rs25000001}>Rs. 25,000.00</div>
          </div>
        </div>
        <div className={styles.maskGroupContainer}>
          <img
            className={styles.maskGroupIcon2}
            loading="lazy"
            alt=""
            src="/mask-group-21@2x.png"
          />
          <div className={styles.outdoorBarTableAndStoolWrapper}>
            <div className={styles.outdoorBarTable}>
              Outdoor bar table and stool
            </div>
          </div>
          <div className={styles.rs2500000Frame}>
            <div className={styles.rs25000002}>Rs. 25,000.00</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <img
            className={styles.maskGroupIcon3}
            loading="lazy"
            alt=""
            src="/mask-group-31@2x.png"
          />
          <div className={styles.plainConsoleWithTeakMirrorWrapper}>
            <div className={styles.plainConsoleWith}>
              Plain console with teak mirror
            </div>
          </div>
          <div className={styles.rs2500000Wrapper1}>
            <div className={styles.rs25000003}>Rs. 25,000.00</div>
          </div>
        </div>
      </div>
      <div className={styles.branchingTree}>
        <div className={styles.forStatementParent}>
          <div className={styles.forStatement}>
            <div className={styles.viewMore}>View More</div>
          </div>
          <div className={styles.frameItem} />
        </div>
      </div>
    </section>
  );
};

export default GroupComponent3;
