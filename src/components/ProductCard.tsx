import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ProductCard.module.css";

export type ProductCardType = {
  trentonModularSofa31?: string;
  trentonModularSofa3?: string;
  rs2500000?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propMargin?: CSSProperties["margin"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex1?: CSSProperties["flex"];
  propOverflow?: CSSProperties["overflow"];
  propMarginLeft?: CSSProperties["marginLeft"];
  propWidth1?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propWidth2?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
};

const ProductCard: FunctionComponent<ProductCardType> = ({
  trentonModularSofa31,
  trentonModularSofa3,
  rs2500000,
  propHeight,
  propWidth,
  propMargin,
  propPosition,
  propTop,
  propLeft,
  propFlex,
  propPadding,
  propAlignSelf,
  propFlex1,
  propOverflow,
  propMarginLeft,
  propWidth1,
  propAlignSelf1,
  propAlignSelf2,
  propWidth2,
  propDisplay,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      margin: propMargin,
      position: propPosition,
      top: propTop,
      left: propLeft,
      flex: propFlex,
      padding: propPadding,
    };
  }, [
    propHeight,
    propWidth,
    propMargin,
    propPosition,
    propTop,
    propLeft,
    propFlex,
    propPadding,
  ]);

  const trentonModularSofa31Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex1,
      overflow: propOverflow,
      marginLeft: propMarginLeft,
      width: propWidth1,
    };
  }, [propAlignSelf, propFlex1, propOverflow, propMarginLeft, propWidth1]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const trentonModularSofa3Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
    };
  }, [propAlignSelf2]);

  const rs2500000Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
      display: propDisplay,
    };
  }, [propWidth2, propDisplay]);

  return (
    <div className={styles.trentonModularSofa31Parent} style={frameDivStyle}>
      <img
        className={styles.trentonModularSofa31}
        alt=""
        src={trentonModularSofa31}
        style={trentonModularSofa31Style}
      />
      <div className={styles.trentonModularSofa3Parent} style={frameDiv1Style}>
        <div
          className={styles.trentonModularSofa3}
          style={trentonModularSofa3Style}
        >
          {trentonModularSofa3}
        </div>
        <div className={styles.rs2500000} style={rs2500000Style}>
          {rs2500000}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
