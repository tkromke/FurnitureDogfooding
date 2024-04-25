import { FunctionComponent } from "react";
import styles from "./GroupComponent1.module.css";

const GroupComponent1: FunctionComponent = () => {
  return (
    <section className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.freeDeliveryParent}>
        <h1 className={styles.freeDelivery}>Free Delivery</h1>
        <div className={styles.forAllOders}>
          For all oders over $50, consectetur adipim scing elit.
        </div>
      </div>
      <div className={styles.daysReturnParent}>
        <h1 className={styles.daysReturn}>90 Days Return</h1>
        <div className={styles.ifGoodsHave}>
          If goods have problems, consectetur adipim scing elit.
        </div>
      </div>
      <div className={styles.securePaymentParent}>
        <h1 className={styles.securePayment}>Secure Payment</h1>
        <div className={styles.securePaymentConsectetur}>
          100% secure payment, consectetur adipim scing elit.
        </div>
      </div>
    </section>
  );
};

export default GroupComponent1;
