import { FunctionComponent } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import GroupComponent from "../components/GroupComponent";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <FrameComponent6 />
      <FrameComponent5 />
      <section className={styles.frameParent}>
        <FrameComponent4 />
        <GroupComponent />
      </section>
      <FrameComponent3 />
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default Home;
