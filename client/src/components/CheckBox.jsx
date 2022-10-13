import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import styles from "../scss/checkbox.module.scss";

const CheckboxInput = ({ ...rest }) => {
  return (
    <FormControlLabel
      className={styles.checkbox_container}
      control={
        <Checkbox
          {...rest}
          style={{ color: "#15883e" }}
          className={styles.checkbox}
        />
      }
    />
  );
};

export default CheckboxInput;
