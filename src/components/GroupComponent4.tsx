import { FunctionComponent } from "react";
import styles from "./GroupComponent4.module.css";

const GroupComponent4: FunctionComponent = () => {
  return (
    <section className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <div className={styles.collaborationHub}>
        <div className={styles.raindropShapeParent}>
          <div className={styles.raindropShape}>
            <div className={styles.descriptionParent}>
              <h3 className={styles.description}>Description</h3>
              <h3 className={styles.additionalInformation}>
                Additional Information
              </h3>
              <h3 className={styles.reviews5}>Reviews [5]</h3>
            </div>
          </div>
          <div className={styles.backupService}>
            <div className={styles.embodyingTheRawWaywardSpiParent}>
              <div className={styles.embodyingTheRaw}>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </div>
              <div className={styles.weighingInUnder}>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/group-107@2x.png"
            />
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-106@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.lineDiv} />
    </section>
  );
};

export default GroupComponent4;
