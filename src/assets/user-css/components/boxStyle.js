import {
  blackColor,
  whiteColor,
  hexToRgb
} from 'assets/user-css/commonStyles'

const boxStyle = {
  box: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
  },
  boxProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
};

export default boxStyle;
