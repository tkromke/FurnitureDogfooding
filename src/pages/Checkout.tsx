import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent14 from "../components/FrameComponent14";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent12 from "../components/FrameComponent12";
import GroupComponent1 from "../components/GroupComponent1";
import Footer from "../components/Footer";
import styles from "./Checkout.module.css";

const Checkout: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onShopText1Click = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const onContactText1Click = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  return (
    <div className={styles.checkout}>
      <FrameComponent14 />
      <FrameComponent13 />
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <FrameComponent12 />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.productParent}>
              <h3 className={styles.product}>Product</h3>
              <h3 className={styles.subtotal}>Subtotal</h3>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.asgaardSofaParent}>
                <div className={styles.asgaardSofa}>Asgaard sofa</div>
                <div className={styles.xWrapper}>
                  <div className={styles.x}>X</div>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.div}>1</div>
                </div>
              </div>
              <div className={styles.rs25000000}>Rs. 250,000.00</div>
            </div>
            <div className={styles.subtotalParent}>
              <div className={styles.subtotal1}>Subtotal</div>
              <div className={styles.rs250000001}>Rs. 250,000.00</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.totalWrapper}>
                <div className={styles.total}>Total</div>
              </div>
              <b className={styles.rs250000002}>Rs. 250,000.00</b>
            </div>
            <div className={styles.frameItem} />
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.ellipseWrapper}>
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.directBankTransfer}>
                  Direct Bank Transfer
                </div>
              </div>
              <div className={styles.makeYourPayment}>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent3}>
                <div className={styles.frameParent4}>
                  <div className={styles.ellipseContainer}>
                    <div className={styles.ellipseDiv} />
                  </div>
                  <div className={styles.directBankTransfer1}>
                    Direct Bank Transfer
                  </div>
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.ellipseFrame}>
                    <div className={styles.frameChild1} />
                  </div>
                  <div className={styles.cashOnDelivery}>Cash On Delivery</div>
                </div>
              </div>
            </div>
            <div className={styles.yourPersonalDataContainer}>
              <span
                className={styles.yourPersonalData}
              >{`Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our `}</span>
              <span className={styles.privacyPolicy}>privacy policy.</span>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <button className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <div className={styles.placeOrder}>Place order</div>
            </button>
          </div>
        </div>
      </section>
      <GroupComponent1 />
      <Footer
        propMarginTop="unset"
        onHomeTextClick={onHomeTextClick}
        onShopText1Click={onShopText1Click}
        onContactText1Click={onContactText1Click}
      />
    </div>
  );
};

export default Checkout;
