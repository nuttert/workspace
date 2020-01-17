import {
  greenColor,
  pointStyle,
  styledFont
} from 'assets/user-css/commonStyles'

const statusStyle={
  point:{
    marginRight:"5px",
    ...pointStyle,
    background:greenColor
  },
  text:{
    textAlign:"center",
    color:"white",
    cursor: "default",
    userSelect: "none",
    fontSize:"13px",
    textTransform:"capitalize",
    ...styledFont
  }
}

export default statusStyle;
