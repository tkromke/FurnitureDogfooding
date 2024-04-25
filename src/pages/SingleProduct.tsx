import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent11 from "../components/FrameComponent11";
import GroupComponent6 from "../components/GroupComponent6";
import GroupComponent5 from "../components/GroupComponent5";
import GroupComponent4 from "../components/GroupComponent4";
import GroupComponent3 from "../components/GroupComponent3";
import Footer from "../components/Footer";
import styles from "./SingleProduct.module.css";

const SingleProduct: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onShopText2Click = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const onContactText1Click = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  return (
    <div className={styles.singleProduct}>
      <FrameComponent11 />
      <main className={styles.frameParent}>
        <section className={styles.frameGroup}>
          <GroupComponent6 />
          <GroupComponent5 />
        </section>
        <GroupComponent4 />
        <GroupComponent3 />
      </main>
      <Footer
        onHomeTextClick={onHomeText1Click}
        onShopText1Click={onShopText2Click}
        onContactText1Click={onContactText1Click}
      />
    </div>
  );
};

export default SingleProduct;
