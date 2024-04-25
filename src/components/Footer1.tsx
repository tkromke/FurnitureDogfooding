import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer1.module.css";

const Footer1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onShopText2Click = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const onContactText2Click = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  return (
    <section className={styles.footer}>
      <div className={styles.emailForm}>
        <div className={styles.universityDriveSuite200CorWrapper}>
          <div className={styles.universityDriveSuiteContainer}>
            <p className={styles.universityDriveSuite}>
              400 University Drive Suite 200 Coral Gables,
            </p>
            <p className={styles.fl33134Usa}>FL 33134 USA</p>
          </div>
        </div>
        <div className={styles.paymentAndOptionsParent}>
          <div className={styles.paymentAndOptions}>
            <div className={styles.links}>Links</div>
            <div className={styles.homeParent}>
              <div className={styles.home} onClick={onHomeText1Click}>
                Home
              </div>
              <div className={styles.shop} onClick={onShopText2Click}>
                Shop
              </div>
              <div className={styles.about}>About</div>
              <div className={styles.contact} onClick={onContactText2Click}>
                Contact
              </div>
            </div>
          </div>
          <div className={styles.quantitySubtotal}>
            <div className={styles.help}>Help</div>
            <div className={styles.paymentOptionsParent}>
              <div className={styles.paymentOptions}>Payment Options</div>
              <div className={styles.returns}>Returns</div>
              <div className={styles.privacyPolicies}>Privacy Policies</div>
            </div>
          </div>
          <div className={styles.securePaymentIcon}>
            <div className={styles.newsletter}>Newsletter</div>
            <div className={styles.frameParent}>
              <div className={styles.enterYourEmailAddressParent}>
                <div className={styles.enterYourEmail}>
                  Enter Your Email Address
                </div>
                <div className={styles.frameChild} />
              </div>
              <button className={styles.subscribeParent}>
                <div className={styles.subscribe}>SUBSCRIBE</div>
                <div className={styles.frameItem} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerChild} />
      <div className={styles.meubelHouseAll}>
        2022 Meubel House. All rights reverved
      </div>
    </section>
  );
};

export default Footer1;
