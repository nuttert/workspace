import {
  blackColor,
  whiteColor,
  hexToRgb,
  defaultFont,
  darkPerpleColor,
  pink,
  aquaColor,
  transition
} from 'assets/user-css/commonStyles'
import { fade } from '@material-ui/core/styles';
const ALIGN_LEFT="ALIGN_LEFT"
const ALIGN_RIGHT="ALIGN_RIGHT"
const ALIGN_CENTER="ALIGN_CENTER"
const HIGHLIGHT="HIGHLIGHT"


const groups = {
  centeringGroup : [ALIGN_LEFT,ALIGN_RIGHT,ALIGN_CENTER]
}



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
      minHeight:"100vh",
      background: "white",
      color:"black",
      margin:"auto",
      fontFamily: 'medium-content-serif-font, Georgia, Cambria, "Times New Roman", Times, serif',
      fontSize: 21,
      fontStyle: 'normal',
      fontWeight: 400,
      padding:"10px",
      padding:"10%",
      paddingLeft:"20%",
      paddingRight:"20%"
    },
    settingsBar:{
      zIndex:999,
      position:"fixed",
      right:0,
      top:0,
      width:"20%"
    },
    editor:{
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
    hoverBlock:{
      position:"relative",
  
    
      "&:before":{
        display: 'block',
        position: 'absolute',
        content: '""',
        height: 0,
        width: 4,
        borderTopLeftRadius:"10px",
        borderTopRightRadius:"10px",
        backgroundColor: pink,
        transition: 'height 0.5s ease-in-out, top 0.5s ease-in-out',
        right: '-5%',
        bottom: "50%",
      },
      "&:after":{
        display: 'block',
        position: 'absolute',
        content: '""',
        height: 0,
        width: 4,
        borderBottomLeftRadius:"10px",
        borderBottomRightRadius:"10px",
        backgroundColor: pink,
        transition: 'height 0.5s ease-in-out',
        right: '-5%',
        top: "50%"
        },
        "&:hover:before":{
          height: '50%',
          },
        "&:hover:after":{
          height: '50%',
        },

        
        "&:last-child:before":{
          height: '50%',
          backgroundColor: aquaColor,
          },
        "&:last-child:after":{
          height: '50%',
          backgroundColor: aquaColor,
        }
    },
    rootSpeedDeal: {
    
      display:"block",
     position: 'absolute',  },
   speedDial: {
     position:"absolute",
     top:"-15px",
     right:theme.spacing(7),
      "& button":{
        backgroundColor:blackColor,
        color:whiteColor
      },
      "& button:hover":{
        backgroundColor:blackColor,
        color:whiteColor
      },
      
   },
   speedDialIcon:{
   },
   link:{
     color:aquaColor
   },
   buttonWrapper :{
    display: 'inline-block',
  },
  
  button :{
    background: '#333',
    color: '#ddd',
    fontSize: 18,
    border: 0,
    paddingTop: 5,
    verticalAlign: 'bottom',
    height: 34,
    width: 36,
    borderRadius: 4,
  },
  
  "button svg ":{
    fill: '#ddd',
  },
  
  "button:hover, button:focus" :{
    background: '#444',
    outline: 0 /* reset for :focus */
  },
  
  active :{
    color: '#6a9cc9',
  },
  
  "active svg" :{
    fill: '#6a9cc9',
  },

  toolbar :{
    border: '1px solid #111',
    background: '#333',
    borderRadius: 4,
    boxShadow: '0px 1px 3px 0px rgba(220,220,220,1)',
    zIndex: 2,
    boxSizing: 'border-box',
    position: 'fixed',
    bottom: 0,
  },
  
  "toolbar:after" :{
    borderColor: 'rgba(255, 255, 255, 0)',
    borderTopColor: '#333',
    borderWidth: 4,
    marginLeft: '-4px',
  },
  
  "toolbar:before" :{
    borderColor: 'rgba(221, 221, 221, 0)',
    borderTopColor: '#111',
    borderWidth: 6,
    marginLeft: '-6px',
  }
  
})


const blockStyleMap = styleClasses=>(block) => {
  
  const mapType = {
    ALIGN_LEFT:styleClasses.ALIGN_LEFT,
    ALIGN_CENTER:styleClasses.ALIGN_CENTER,
    ALIGN_RIGHT:styleClasses.ALIGN_RIGHT,
  };
  let type = block.getType();
  const classes = mapType[type] + " "+ styleClasses.hoverBlock;

  return classes;
  
}

export{
  style,
  customStyleMap,
  blockStyleMap,
  ALIGN_LEFT,
  ALIGN_RIGHT,
  ALIGN_CENTER,
  HIGHLIGHT,
} 
