import { FunctionComponent } from "react";
import FormField from "./FormField";
import styles from "./FrameComponent12.module.css";

const FrameComponent12: FunctionComponent = () => {
  return (
    <div className={styles.billingDetailsParent}>
      <h1 className={styles.billingDetails}>Billing details</h1>
      <div className={styles.frameWrapper}>
        <div className={styles.formFieldParent}>
          <div className={styles.formField}>
            <div className={styles.title}>First Name</div>
            <div className={styles.formFieldChild} />
          </div>
          <div className={styles.formField1}>
            <div className={styles.title1}>Last Name</div>
            <div className={styles.formFieldItem} />
          </div>
        </div>
      </div>
      <div className={styles.formFieldGroup}>
        <div className={styles.formField2}>
          <div className={styles.title2}>Company Name (Optional)</div>
          <div className={styles.formFieldInner} />
        </div>
        <FormField title="Country / Region" sriLanka="Sri Lanka" />
        <div className={styles.formField3}>
          <div className={styles.title3}>Street address</div>
          <div className={styles.frameDiv} />
        </div>
        <div className={styles.formField4}>
          <div className={styles.title4}>Town / City</div>
          <div className={styles.formFieldChild1} />
        </div>
        <FormField
          title="Province"
          sriLanka="Western Province"
          propDisplay="inline-block"
          propMinWidth="70px"
          propDisplay1="unset"
          propMinWidth1="unset"
        />
        <div className={styles.formField5}>
          <div className={styles.title5}>Province</div>
          <div className={styles.formFieldChild2} />
        </div>
        <div className={styles.formField6}>
          <div className={styles.title6}>ZIP code</div>
          <div className={styles.formFieldChild3} />
        </div>
        <div className={styles.formField7}>
          <div className={styles.title7}>Phone</div>
          <div className={styles.formFieldChild4} />
        </div>
        <FormField
          title="Email address"
          sriLanka="Additional information"
          propDisplay="inline-block"
          propMinWidth="115px"
          propDisplay1="unset"
          propMinWidth1="unset"
        />
      </div>
    </div>
  );
};

export default FrameComponent12;
