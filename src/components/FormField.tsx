import { FunctionComponent, useMemo, type CSSProperties } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import styles from "./FormField.module.css";

export type FormField1Type = {
  title?: string;
  sriLanka?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const FormField1: FunctionComponent<FormField1Type> = ({
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

  return (
    <div className={styles.formField}>
      <div className={styles.title} style={titleStyle}>
        {title}
      </div>
      <FormControl
        className={styles.provinceParent}
        variant="outlined"
        sx={{
          borderRadius: "0px 0px 0px 0px",
          width: "453px",
          height: "75px",
          m: 0,
          p: 0,
          "& .MuiInputBase-root": {
            m: 0,
            p: 0,
            minHeight: "75px",
            justifyContent: "center",
            display: "inline-flex",
          },
          "& .MuiInputLabel-root": {
            m: 0,
            p: 0,
            minHeight: "75px",
            display: "inline-flex",
          },
          "& .MuiMenuItem-root": {
            m: 0,
            p: 0,
            height: "75px",
            display: "inline-flex",
          },
          "& .MuiSelect-select": {
            m: 0,
            p: 0,
            height: "75px",
            alignItems: "center",
            display: "inline-flex",
          },
          "& .MuiInput-input": { m: 0, p: 0 },
          "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
        }}
      >
        <InputLabel color="primary">Province</InputLabel>
        <Select
          color="primary"
          size="medium"
          label="Province"
          disableUnderline
          displayEmpty
        >
          <MenuItem value="India">India</MenuItem>
          <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
          <MenuItem value="Nepal">Nepal</MenuItem>
          <MenuItem value="Pakistan">Pakistan</MenuItem>
          <MenuItem value="Singapore">Singapore</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="UK">UK</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
    </div>
  );
};

export default FormField1;
