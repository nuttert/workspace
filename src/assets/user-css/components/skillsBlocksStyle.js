
import {
  darkPerpleColor,
  pink
} from 'assets/user-css/commonStyles'
import { aquaColor } from '../commonStyles';

const skillsBlocksStyle = theme => ({
  "@keyframes point-blinker-1":{
    "0%" :{ opacity: 1.0,fill:aquaColor },
    "50%" :{ opacity: 1.0,fill:pink  },
    "100%" :{ opacity: 1.0,fill:aquaColor},
  },
  "@-webkit-keyframes point-blinker-1":{
    "0%" :{ opacity: 1.0,fill:aquaColor },
    "50%" :{ opacity: 1.0,fill:pink  },
    "100%" :{ opacity: 1.0,fill:aquaColor},
  },
  "@keyframes point-blinker-2":{
    "0%" :{ opacity: 1.0,fill:pink },
    "50%" :{ opacity: 1.0,fill:aquaColor  },
    "100%" :{ opacity: 1.0,fill:pink},
  },
  "@-webkit-keyframes point-blinker-2":{
    "0%" :{ opacity: 1.0,fill:pink },
    "50%" :{ opacity: 1.0,fill:aquaColor  },
    "100%" :{ opacity: 1.0,fill:pink},
  },
  "@keyframes point-blinker-3":{
    "0%" :{ opacity: 0.0 },
    "25%" :{ opacity: 0.5 },
    "50%" :{ opacity: 1.0 },
    "75%" :{ opacity: 0.5 },
    "100%" :{ opacity: 0.0 },
  },
  "@-webkit-keyframes point-blinker-3":{
    "0%" :{ opacity: 0.0 },
    "25%" :{ opacity: 0.5 },
    "50%" :{ opacity: 1.0 },
    "75%" :{ opacity: 0.5 },
    "100%" :{ opacity: 0.0 },
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  block:{
    flexGrow: 1,
    padding:0,
    margin:0,
    height:"auto",
    borderRadius:"5px",
    background:darkPerpleColor
  },

  img: {
    position:"relative",
    width:"80%",
    maxWidth: '80%',
  },
  emblemImg:{
    marginTop:"20%",
    marginLeft:"-40%",
    "& #__back_point_1":{
      fill:pink,
      WebkitAnimation: "$point-blinker-1 4s linear infinite",
      animation: "$point-blinker-1 4s linear infinite",
    },
    "& #__back_point_2":{
      fill:pink,
      WebkitAnimation: "$point-blinker-2 4s linear infinite",
      animation: "$point-blinker-2 4s linear infinite",
    },
    "& #__back_point_3":{
      fill:pink,
      WebkitAnimation: "$point-blinker-1 4s linear infinite",
      animation: "$point-blinker-1 4s linear infinite",
    }
  },
  emblemContainer:{
    border:"1px solid",
    borderColor:pink
  },

});

export default skillsBlocksStyle;
