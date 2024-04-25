import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
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
          <button className={styles.rectangleParent}>
            <div className={styles.frameItem} />
            <div className={styles.followUs}>Follow Us</div>
          </button>
        </div>
      </div>
      <Footer
        onHomeTextClick={onHomeTextClick}
        onShopText1Click={onShopText1Click}
        onContactText1Click={onContactText1Click}
      />
    </section>
  );
};

export default FrameComponent;
