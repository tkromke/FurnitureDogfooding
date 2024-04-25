import { FunctionComponent } from "react";
import styles from "./GroupComponent7.module.css";

const GroupComponent7: FunctionComponent = () => {
  return (
    <section className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.product}>Product</div>
          <div className={styles.priceWrapper}>
            <div className={styles.price}>Price</div>
          </div>
          <div className={styles.quantityParent}>
            <div className={styles.quantity}>Quantity</div>
            <div className={styles.subtotal}>Subtotal</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/group-137@2x.png"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.asgaardSofaWrapper}>
                <div className={styles.asgaardSofa}>Asgaard sofa</div>
              </div>
              <div className={styles.rs25000000Wrapper}>
                <div className={styles.rs25000000}>Rs. 250,000.00</div>
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <div className={styles.removeButton}>1</div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.rs25000000Container}>
                    <div className={styles.rs250000001}>Rs. 250,000.00</div>
                  </div>
                  <img
                    className={styles.antDesigndeleteFilledIcon}
                    loading="lazy"
                    alt=""
                    src="/antdesigndeletefilled.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.frameChild1} />
        <div className={styles.cartTotalsWrapper}>
          <h1 className={styles.cartTotals}>Cart Totals</h1>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.frameParent3}>
            <div className={styles.subtotalParent}>
              <div className={styles.subtotal1}>Subtotal</div>
              <div className={styles.rs250000002}>Rs. 250,000.00</div>
            </div>
            <div className={styles.totalParent}>
              <div className={styles.total}>Total</div>
              <div className={styles.rs250000003}>Rs. 250,000.00</div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <button className={styles.groupButton}>
              <div className={styles.frameChild2} />
              <div className={styles.checkOut}>Check Out</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent7;
