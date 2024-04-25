import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.homeInner}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.ourBlogsParent}>
            <h1 className={styles.ourBlogs}>Our Blogs</h1>
            <div className={styles.findABright}>
              Find a bright ideal to suit your taste with our great selection
            </div>
          </div>
          <div className={styles.universityDrive}>
            <FrameComponent2 frame230="/frame-230@2x.png" />
            <FrameComponent2 frame230="/frame-230-1@2x.png" />
            <FrameComponent2 frame230="/frame-230-2@2x.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
