import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ProductCard.module.css";

export type ProductCardType = {
  maskGroup?: string;
  trentonModularSofa3?: string;
  rs2500000?: string;

  /** Style props */
  frameDivPadding?: CSSProperties["padding"];
  frameDivWidth?: CSSProperties["width"];
  frameDivPadding1?: CSSProperties["padding"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  rs2500000Flex?: CSSProperties["flex"];
  rs2500000Display?: CSSProperties["display"];
  rs2500000MinWidth?: CSSProperties["minWidth"];
  propPadding?: CSSProperties["padding"];
};

const ProductCard: FunctionComponent<ProductCardType> = ({
  maskGroup,
  trentonModularSofa3,
  rs2500000,
  frameDivPadding,
  frameDivWidth,
  frameDivPadding1,
  frameDivAlignSelf,
  rs2500000Flex,
  rs2500000Display,
  rs2500000MinWidth,
  propPadding,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
      width: frameDivWidth,
    };
  }, [frameDivPadding, frameDivWidth]);

  const trentonModularSofa3Style: CSSProperties = useMemo(() => {
    return {
      flex: rs2500000Flex,
      display: rs2500000Display,
      minWidth: rs2500000MinWidth,
    };
  }, [rs2500000Flex, rs2500000Display, rs2500000MinWidth]);

  return (
    <div className={styles.maskGroupParent} style={frameDivStyle}>
      <img
        className={styles.maskGroupIcon}
        loading="lazy"
        alt=""
        src={maskGroup}
      />
      <div className={styles.trentonModularSofa3Wrapper}>
        <div
          className={styles.trentonModularSofa3}
          style={trentonModularSofa3Style}
        >
          {trentonModularSofa3}
        </div>
      </div>
      <div className={styles.rs2500000Wrapper}>
        <div className={styles.rs2500000}>{rs2500000}</div>
      </div>
    </div>
  );
};

export default ProductCard;
