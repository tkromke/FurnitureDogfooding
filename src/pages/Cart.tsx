import { FunctionComponent } from "react";
import FrameComponent14 from "../components/FrameComponent14";
import FrameComponent15 from "../components/FrameComponent15";
import GroupComponent7 from "../components/GroupComponent7";
import Footer1 from "../components/Footer1";
import styles from "./Cart.module.css";

const Cart: FunctionComponent = () => {
  return (
    <div className={styles.cart}>
      <FrameComponent14 />
      <FrameComponent15 />
      <footer className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.universityDriveSuite200CorParent}>
            <div className={styles.universityDriveSuiteContainer}>
              <p className={styles.universityDriveSuite}>
                400 University Drive Suite 200 Coral Gables,
              </p>
              <p className={styles.fl33134Usa}>FL 33134 USA</p>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.groupDiv}>
                  <div className={styles.homeParent}>
                    <div className={styles.home}>Home</div>
                    <div className={styles.shop}>Shop</div>
                    <div className={styles.about}>About</div>
                    <div className={styles.contact}>Contact</div>
                  </div>
                  <div className={styles.links}>Links</div>
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
              <div className={styles.newsletterParent}>
                <div className={styles.newsletter}>Newsletter</div>
                <div className={styles.enterYourEmailAddressParent}>
                  <div className={styles.enterYourEmail}>
                    Enter Your Email Address
                  </div>
                  <div className={styles.frameItem} />
                  <div className={styles.subscribe}>SUBSCRIBE</div>
                  <div className={styles.frameInner} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.lineParent}>
            <div className={styles.lineDiv} />
            <div className={styles.meubelHouseAll}>
              2022 Meubel House. All rights reverved
            </div>
          </div>
        </div>
      </footer>
      <GroupComponent7 />
      <section className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
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
      <Footer1 />
    </div>
  );
};

export default Cart;
