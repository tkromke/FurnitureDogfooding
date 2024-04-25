import { FunctionComponent } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent10 from "../components/FrameComponent10";
import GroupComponent2 from "../components/GroupComponent2";
import ProductCard from "../components/ProductCard";
import GroupComponent1 from "../components/GroupComponent1";
import styles from "./Shop.module.css";

const Shop: FunctionComponent = () => {
  return (
    <div className={styles.shop}>
      <FrameComponent6 frameNavBackgroundColor="#fff" />
      <FrameComponent10 />
      <GroupComponent2 />
      <FrameComponent8 />
      <GroupComponent1 />
      <footer className={styles.frameFooter}>
        <div className={styles.frameParent2}>
          <div className={styles.frameParent3}>
            <div className={styles.universityDriveSuite200CorWrapper}>
              <div className={styles.universityDriveSuiteContainer}>
                <p className={styles.universityDriveSuite}>
                  400 University Drive Suite 200 Coral Gables,
                </p>
                <p className={styles.fl33134Usa}>FL 33134 USA</p>
              </div>
            </div>
            <div className={styles.linksAndContactInfo}>
              <div className={styles.frameParent4}>
                <div className={styles.linksParent}>
                  <div className={styles.links}>Links</div>
                  <div className={styles.homeParent}>
                    <div className={styles.home}>Home</div>
                    <div className={styles.shop1}>Shop</div>
                    <div className={styles.about}>About</div>
                    <div className={styles.contact}>Contact</div>
                  </div>
                </div>
                <div className={styles.helpParent}>
                  <div className={styles.help}>Help</div>
                  <div className={styles.paymentOptionsParent}>
                    <div className={styles.paymentOptions}>Payment Options</div>
                    <div className={styles.returns}>Returns</div>
                    <div className={styles.privacyPolicies}>
                      Privacy Policies
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.newsletterSubscription}>
                <div className={styles.newsletter}>Newsletter</div>
                <div className={styles.frameParent5}>
                  <div className={styles.enterYourEmailAddressWrapper}>
                    <div className={styles.enterYourEmail}>
                      Enter Your Email Address
                    </div>
                  </div>
                  <button className={styles.subscribeWrapper}>
                    <div className={styles.subscribe}>SUBSCRIBE</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.meubelHouseNotice}>
            <input
              className={styles.meubelHouseAll}
              placeholder="2022 Meubel House. All rights reverved"
              type="text"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
