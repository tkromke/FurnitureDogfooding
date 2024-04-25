import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent10 from "../components/FrameComponent10";
import GroupComponent2 from "../components/GroupComponent2";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import GroupComponent1 from "../components/GroupComponent1";
import Footer from "../components/Footer";
import styles from "./Shop.module.css";

const Shop: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeText2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onShopText2Click = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const onContactText1Click = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  return (
    <div className={styles.shop}>
      <FrameComponent6 frameNavBackgroundColor="#fff" />
      <FrameComponent10 />
      <GroupComponent2 />
      <FrameComponent8 />
      <GroupComponent1 />
      <Footer
        propMarginTop="unset"
        onHomeTextClick={onHomeText2Click}
        onShopText1Click={onShopText2Click}
        onContactText1Click={onContactText1Click}
      />
    </div>
  );
};

export default Shop;
