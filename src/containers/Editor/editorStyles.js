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
const ALIGN_LEFT="ALIGN_LEFT"
const ALIGN_RIGHT="ALIGN_RIGHT"
const ALIGN_CENTER="ALIGN_CENTER"
const HIGHLIGHT="HIGHLIGHT"


const customStyleMap = {
  [HIGHLIGHT]: {
    textDecoration: 'underline',
  },
  [ALIGN_LEFT]:{
    textAlignment:"left",
  },
  [ALIGN_RIGHT]:{
    textAlignment:"right",
  },
  [ALIGN_CENTER]:{
    textAlignment:"center",
  },
};

const style = theme => ({
  root: {
      margin: theme.spacing(1),
      position:"relative",
      width: "100%",
      minHeight:"50vh",
      background: "white",
      color:"black",
      margin:"auto",
      marginTop:"10%",
      fontFamily: 'medium-content-serif-font, Georgia, Cambria, "Times New Roman", Times, serif',
      fontSize: 21,
      fontStyle: 'normal',
      fontWeight: 400,
      padding:"10px"
    },
    editor:{
      background:"black",
      minHeight:"500px",
      height:"500px",
      ...defaultFont
    },
    ALIGN_LEFT:{
      textAlign:"left"
    },
    ALIGN_CENTER:{
      textAlign:"center"
    },
    ALIGN_RIGHT:{
      textAlign:"right"
    },
})

const blockStyleMap = classes=>(block) => {

  switch (block.getType()) {
      case ALIGN_LEFT:
          return classes.ALIGN_LEFT;
      case ALIGN_CENTER:
          return classes.ALIGN_CENTER;
      case ALIGN_RIGHT:
          return classes.ALIGN_RIGHT;
      default:
          return null;
  }   
}

export{
  style,
  customStyleMap,
  blockStyleMap,
  ALIGN_LEFT,
  ALIGN_RIGHT,
  ALIGN_CENTER,
  HIGHLIGHT
} 
