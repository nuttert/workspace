import {
  aquaColor,
  blackColor,
  whiteColor,
  defaultFont,
  transition,
  drawerWidth,
  hexToRgb
} from 'assets/user-css/commonStyles'

const editorTooltipStyle =
  theme => ({
    root: {
      width: 'fit-content',
      backgroundColor: "transparent",
      color: "white",
      '& svg': {
        margin: theme.spacing(1),
      },
      '& hr': {
        margin: theme.spacing(0, 0.2),
      },
    },
    icon:{
      width:"20px"
    },
    toolbar: {
      "position": "absolute",
      width:"1px",
      height:"1px",
      margin:"auto"
    },
    element:{
      zIndex:1000,
      "&:hover":{
        fill:aquaColor
      },
      pointerEvents: 'all',
    },
    selectedElement:{
      fill:aquaColor
    }
  });


export default editorTooltipStyle;
