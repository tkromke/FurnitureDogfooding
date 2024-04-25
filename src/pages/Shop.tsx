import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent10 from "../components/FrameComponent10";
import GroupComponent2 from "../components/GroupComponent2";
import ProductCatalogue from "../components/ProductCatalogue";
import FrameComponent16 from "../components/FrameComponent16";
import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent17 from "../components/FrameComponent17";
import styles from "./Shop.module.css";

const Shop: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAntDesignshoppingCartOutliIconClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <div className={styles.shop}>
      <header className={styles.frameParent}>
        <nav className={styles.homeParent}>
          <div className={styles.home} onClick={onHomeTextClick}>
            Home
          </div>
          <div className={styles.shop1}>Shop</div>
          <div className={styles.about}>About</div>
          <div className={styles.contact}>Contact</div>
        </nav>
        <div className={styles.mdiaccountAlertOutlineParent}>
          <img
            className={styles.mdiaccountAlertOutlineIcon}
            loading="lazy"
            alt=""
            src="/mdiaccountalertoutline.svg"
          />
          <img
            className={styles.akarIconssearch}
            loading="lazy"
            alt=""
            src="/akariconssearch.svg"
          />
          <img
            className={styles.akarIconsheart}
            loading="lazy"
            alt=""
            src="/akariconsheart.svg"
          />
          <img
            className={styles.antDesignshoppingCartOutliIcon}
            loading="lazy"
            alt=""
            src="/antdesignshoppingcartoutlined.svg"
            onClick={onAntDesignshoppingCartOutliIconClick}
          />
        </div>
      </header>
      <FrameComponent10 />
      <GroupComponent2 />
      <section className={styles.shopInner}>
        <div className={styles.frameGroup}>
          <ProductCatalogue />
          <FrameComponent16 />
        </div>
      </section>
      <GroupComponent1 />
      <FrameComponent17 />
    </div>
  );
};

export default Shop;
