import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  const onGroupButtonClick = useCallback(() => {
    window.open("https://www.instagram.com/locofy_ai/");
  }, []);

  return (
    <section className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-43@2x.png"
        />
        <div className={styles.ourInstagramParent}>
          <h1 className={styles.ourInstagram}>Our Instagram</h1>
          <div className={styles.followOurStoreOnInstagramWrapper}>
            <div className={styles.followOurStore}>
              Follow our store on Instagram
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <button
            className={styles.rectangleParent}
            onClick={onGroupButtonClick}
          >
            <div className={styles.frameItem} />
            <div className={styles.followUs}>Follow Us</div>
          </button>
        </div>
      </div>
      <footer className={styles.subscribeFormWrapper}>
        <div className={styles.subscribeForm}>
          <div className={styles.frameContainer}>
            <div className={styles.universityDriveSuite200CorWrapper}>
              <div className={styles.universityDriveSuiteContainer}>
                <p className={styles.universityDriveSuite}>
                  400 University Drive Suite 200 Coral Gables,
                </p>
                <p className={styles.fl33134Usa}>FL 33134 USA</p>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.linksParent}>
                  <div className={styles.links}>Links</div>
                  <div className={styles.homeParent}>
                    <div className={styles.home}>Home</div>
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
                    <div className={styles.privacyPolicies}>
                      Privacy Policies
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footerLinks}>
                <div className={styles.newsletter}>Newsletter</div>
                <div className={styles.footerLinks1}>
                  <input
                    className={styles.inputEmail}
                    placeholder="Enter Your Email Address"
                    type="text"
                  />
                  <div className={styles.inputEmail1}>
                    <button className={styles.subscribe}>SUBSCRIBE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.newsletterContainer}>
            <div className={styles.meubelHouseAll}>
              2022 Meubel House. All rights reverved
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FrameComponent;
