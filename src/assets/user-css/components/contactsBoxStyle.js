import {
  blackColor,
  whiteColor,
  hexToRgb,
  defaultFont,
  styledFont,
  border,
  aquaColor,
  transition
} from 'assets/user-css/commonStyles'
import { white } from 'material-ui/styles/colors';

const contactsBox = {
  box: {
    padding: "0.9375rem 20px",
    display:"flex",
    margin:"0",
    WebkitBoxFlex: "1",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: "10px",
    background:'rgba('+hexToRgb(blackColor)+",0.85)",
    verticalAlign: "middle",
  },
  svgImg: {
    width: "10px",
    height:"auto",
    verticalAlign: "middle",
    border: "0",
    margin:"auto",
    marginRight:"10px"
  },
  svgImgFeedback:{
    width: "26px",
    height:"auto",
    verticalAlign: "middle",
    border: "0",
    margin:"auto",
    marginTop:"10px",
    marginBottom:"10px",
    ...transition,
    "&:hover,&:focus":{
      transform:"scale(1.2)"
    }
  },
  itemText: {
    ...styledFont,
    margin: "0",
    lineHeight: "30px",
    color: whiteColor,
    textDecoration: "none",
    textWrap:"nowrap",
    textAlign:"left"
  },
  messageButton:{
    padding:"4px 17px",
    borderRadius:"15px",
    fontSize:"12px",
    border: '2px solid',
    borderColor:aquaColor,
    background:"transparent",
    color:whiteColor,
    textTransform:"capitalize",
    "&:hover,&:focus":{
      background:aquaColor,
    }
  },
  phoneButton:{
    padding:"4px 17px",
    borderRadius:"15px",
    fontSize:"12px",
    border: '2px solid',
    borderColor:aquaColor,
    background:aquaColor,
    color:whiteColor,
    textTransform:"capitalize",
    "&:hover,&:focus":{
      background:"transparent",
    }
  }
};

export default contactsBox;
