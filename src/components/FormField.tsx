import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FormField.module.css";

export type FormFieldType = {
  title?: string;
  sriLanka?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const FormField: FunctionComponent<FormFieldType> = ({
  title,
  sriLanka,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
}) => {
  const titleStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const sriLankaStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  return (
    <div className={styles.formField}>
      <div className={styles.title} style={titleStyle}>
        {title}
      </div>
      <div className={styles.sriLankaParent}>
        <div className={styles.sriLanka} style={sriLankaStyle}>
          {sriLanka}
        </div>
        <img
          className={styles.dashiconsarrowDownAlt2}
          alt=""
          src="/dashiconsarrowdownalt2-1.svg"
        />
      </div>
    </div>
  );
};

export default FormField;
