import { FunctionComponent } from "react";
import FormField1 from "./FormField";
import styles from "./FrameComponent12.module.css";

const FrameComponent12: FunctionComponent = () => {
  return (
    <div className={styles.billingDetailsParent}>
      <h1 className={styles.billingDetails}>Billing details</h1>
      <div className={styles.frameWrapper}>
        <div className={styles.formFieldParent}>
          <div className={styles.formField}>
            <div className={styles.title}>First Name</div>
            <input className={styles.formFieldChild} type="text" />
          </div>
          <div className={styles.formField1}>
            <div className={styles.title1}>Last Name</div>
            <input className={styles.formFieldItem} type="text" />
          </div>
        </div>
      </div>
      <div className={styles.formFieldGroup}>
        <div className={styles.formField2}>
          <div className={styles.title2}>Company Name (Optional)</div>
          <input className={styles.formFieldInner} type="text" />
        </div>
        <FormField1 title="Country / Region" />
        <div className={styles.formField3}>
          <div className={styles.title3}>Street address</div>
          <input className={styles.frameInput} type="text" />
        </div>
        <div className={styles.formField4}>
          <div className={styles.title4}>Town / City</div>
          <input className={styles.formFieldChild1} type="text" />
        </div>
        <FormField1
          title="Province"
          propDisplay="inline-block"
          propMinWidth="70px"
        />
        <div className={styles.formField5}>
          <div className={styles.title5}>Province</div>
          <input className={styles.formFieldChild2} type="text" />
        </div>
        <div className={styles.formField6}>
          <div className={styles.title6}>ZIP code</div>
          <input className={styles.formFieldChild3} type="number" />
        </div>
        <div className={styles.formField7}>
          <div className={styles.title7}>Phone</div>
          <input className={styles.formFieldChild4} type="number" />
        </div>
        <FormField1
          title="Email address"
          propDisplay="inline-block"
          propMinWidth="115px"
        />
      </div>
    </div>
  );
};

export default FrameComponent12;
