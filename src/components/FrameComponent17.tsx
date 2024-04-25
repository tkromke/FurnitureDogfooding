import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent17.module.css";

const FrameComponent17: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeText2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <footer className={styles.shopInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.universityDriveSuite200CorWrapper}>
            <div className={styles.universityDriveSuiteContainer}>
              <p className={styles.universityDriveSuite}>
                400 University Drive Suite 200 Coral Gables,
              </p>
              <p className={styles.fl33134Usa}>FL 33134 USA</p>
            </div>
          </div>
          <div className={styles.linksAndContactInfo}>
            <div className={styles.frameContainer}>
              <div className={styles.linksParent}>
                <div className={styles.links}>Links</div>
                <div className={styles.homeParent}>
                  <div className={styles.home} onClick={onHomeText2Click}>
                    Home
                  </div>
                  <div className={styles.shop}>Shop</div>
                  <div className={styles.about}>About</div>
                  <div className={styles.contact}>Contact</div>
                </div>
              </div>
              <div className={styles.helpParent}>
                <div className={styles.help}>Help</div>
                <div className={styles.paymentOptionsParent}>
                  <div className={styles.paymentOptions}>Payment Options</div>
                  <div className={styles.returns}>Returns</div>
                  <div className={styles.privacyPolicies}>Privacy Policies</div>
                </div>
              </div>
            </div>
            <div className={styles.newsletterSubscription}>
              <div className={styles.newsletter}>Newsletter</div>
              <div className={styles.frameDiv}>
                <input
                  className={styles.frameChild}
                  placeholder="Enter Your Email Address"
                  type="text"
                />
                <button className={styles.subscribeWrapper}>
                  <div className={styles.subscribe}>SUBSCRIBE</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.meubelHouseNotice}>
          <div className={styles.meubelHouseAll}>
            2022 Meubel House. All rights reverved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent17;
