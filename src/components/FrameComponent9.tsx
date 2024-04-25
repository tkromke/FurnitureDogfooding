import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent9.module.css";

export type FrameComponent9Type = {
  maskGroup?: string;
  sJP0825?: string;
  rs20000000?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  maskGroup,
  sJP0825,
  rs20000000,
  propPadding,
  propPadding1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.maskGroupParent} style={frameDivStyle}>
      <img
        className={styles.maskGroupIcon}
        loading="lazy"
        alt=""
        src={maskGroup}
      />
      <div className={styles.frameWrapper} style={frameDiv1Style}>
        <div className={styles.sjp0825Parent}>
          <div className={styles.sjp0825}>{sJP0825}</div>
          <div className={styles.rs20000000}>{rs20000000}</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent9;
