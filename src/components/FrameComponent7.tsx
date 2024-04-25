import { FunctionComponent } from "react";
import ProductCard from "./ProductCard";
import styles from "./FrameComponent7.module.css";

const FrameComponent7: FunctionComponent = () => {
  return (
    <section className={styles.shopInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <ProductCard
            maskGroup="/mask-group@2x.png"
            trentonModularSofa3="Granite square side table"
            rs2500000="Rs. 258,800.00"
            frameDivPadding="0px var(--padding-lgi-9)"
            frameDivWidth="unset"
            frameDivPadding1="0px var(--padding-23xl)"
            frameDivAlignSelf="stretch"
            rs2500000Flex="unset"
            rs2500000Display="unset"
            rs2500000MinWidth="unset"
            propPadding="0px var(--padding-23xl)"
          />
          <ProductCard
            maskGroup="/mask-group-1@2x.png"
            trentonModularSofa3="Asgaard sofa"
            rs2500000="Rs. 250,000.00"
            frameDivPadding="0px var(--padding-lgi-8)"
            frameDivWidth="unset"
            frameDivPadding1="0px var(--padding-19xl) 0px var(--padding-18xl-5)"
            frameDivAlignSelf="stretch"
            rs2500000Flex="1"
            rs2500000Display="unset"
            rs2500000MinWidth="unset"
            propPadding="0px var(--padding-18xl) 0px var(--padding-18xl-5)"
          />
          <ProductCard
            maskGroup="/mask-group-2@2x.png"
            trentonModularSofa3="Maya sofa three seater"
            rs2500000="Rs. 115,000.00"
            frameDivPadding="0px var(--padding-lgi-9)"
            frameDivWidth="unset"
            frameDivPadding1="0px var(--padding-18xl) 0px var(--padding-18xl-5)"
            frameDivAlignSelf="stretch"
            rs2500000Flex="1"
            rs2500000Display="unset"
            rs2500000MinWidth="unset"
            propPadding="0px var(--padding-18xl) 0px var(--padding-18xl-5)"
          />
          <ProductCard
            maskGroup="/mask-group-3@2x.png"
            trentonModularSofa3="Outdoor sofa set"
            rs2500000="Rs. 244,000.00"
            frameDivPadding="0px var(--padding-lgi-8) var(--padding-12xs)"
            frameDivWidth="unset"
            frameDivPadding1="0px var(--padding-25xl)"
            frameDivAlignSelf="stretch"
            rs2500000Flex="1"
            rs2500000Display="unset"
            rs2500000MinWidth="unset"
            propPadding="0px var(--padding-25xl)"
          />
        </div>
        <div className={styles.freeShipping}>
          <div className={styles.frameContainer}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.div}>1</div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.div1}>2</div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.div2}>3</div>
            </div>
            <button className={styles.groupButton}>
              <div className={styles.rectangleDiv} />
              <div className={styles.next}>Next</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
