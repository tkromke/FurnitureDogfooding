import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];

  /** Action props */
  onHomeTextClick?: () => void;
  onShopText1Click?: () => void;
  onContactText1Click?: () => void;
};

const Footer: FunctionComponent<FooterType> = ({
  propMarginTop,
  onHomeTextClick,
  onShopText1Click,
  onContactText1Click,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <footer className={styles.footer} style={footerStyle}>
      <div className={styles.frameParent}>
        <div className={styles.universityDriveSuite200CorWrapper}>
          <div className={styles.universityDriveSuiteContainer}>
            <p className={styles.universityDriveSuite}>
              400 University Drive Suite 200 Coral Gables,
            </p>
            <p className={styles.fl33134Usa}>FL 33134 USA</p>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.linksParent}>
            <div className={styles.links}>Links</div>
            <div className={styles.homeParent}>
              <div className={styles.home} onClick={onHomeTextClick}>
                Home
              </div>
              <div className={styles.shop} onClick={onShopText1Click}>
                Shop
              </div>
              <div className={styles.about}>About</div>
              <div className={styles.contact} onClick={onContactText1Click}>
                Contact
              </div>
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
          <div className={styles.newsletterParent}>
            <div className={styles.newsletter}>Newsletter</div>
            <div className={styles.frameContainer}>
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
    </footer>
  );
};

export default Footer;
