import {
  darkPerpleColor,
  whiteColor,
  greyColor,
  greenAquaColor,
  hrStyle,
  transition,
  pink
} from 'assets/user-css/commonStyles'
import { aquaColor } from '../commonStyles';

const workspaceAbilitiesStyle = theme => ({
    card: {
      display: 'flex',
      background: darkPerpleColor,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow:1,
    },
    content: {
      flex: '1 0 auto',
      color:whiteColor
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    title:{
      color:whiteColor,
      textTransform:"capitalize"
    },
    subtitle:{
      color:greyColor
    },
    media:{
      minWidth:"40px",
      minHeight:"40px",
      maxWidth:"50px",
      maxHeight:"50px",
      margin:"15px",
      marginLeft:"40px",
      [theme.breakpoints.down("md")]: {
        minWidth:"30px",
        minHeight:"30px",
        margin:"12px",
      },
      [theme.breakpoints.down('sm')]: {
        margin:"5px",
        minWidth:"40px",
        minHeight:"40px",
        marginLeft:"30px",
      },
      [theme.breakpoints.down('xs')]: {
        margin:"5px",
        minWidth:"30px",
        minHeight:"30px",
        marginLeft:"10px",
      },
    },

})
const complitedTasksCardStyle = theme => ({
    card: {
      display: 'flex',
      background: darkPerpleColor,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent:"center",
      alignItems:"center",
      flexGrow:1,

    },
    content: {
      justifyContent:"center",
      alignItems:"center",
      color:whiteColor,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    title:{
      color:whiteColor,
    },
    subtitle:{
      color:whiteColor,
    },
    subtitle2:{
      color:greenAquaColor,
    },
    svgImg: {
      width: "10px",
      height:"10px",
      verticalAlign: "middle",
      border: "0",
      margin:"auto",
      marginLeft:"5px",
      marginRight:"5px",
    },
    media:{
      maxWidth:"60px",
      maxHeight:"60px",
      minWidth:"70px",
      minHeight:"70px",
      margin:"40px",
      marginLeft:"50px",
      marginRight:"10px",
      [theme.breakpoints.down("md")]: {
        minWidth:"70px",
        minHeight:"70px",
        margin:"30px",
      },
      [theme.breakpoints.down('sm')]: {
        minWidth:"50px",
        minHeight:"50px",
        margin:"35px",
        marginLeft:"30px",
      },
      [theme.breakpoints.down('xs')]: {
        minWidth:"40px",
        minHeight:"40px",
        margin:"5px",
        marginLeft:"20px",
      },
    }
})

const skillsCardStyle = theme =>({
    card: {
      background: darkPerpleColor,
      flexDirection:"column",
      boxShadow:"none",
    },
    title:{
      color:whiteColor,
      flexShrink: 1,
      display:"block"
    },
    subtitle:{
      color:whiteColor,
    },
    subtitle2:{
      color:greenAquaColor,
    },
    titleWrap: {
      justifyContent:"center",
      alignItems:"center",
      background:"transparent",
      border:"none",
      padding:"2px",
    },
    icon:{
      color:whiteColor
    },
    panelDetails:{
      overflowY:"scroll",
      height:"85px",
      padding:0,
      paddingLeft:10,
      paddingRight:10,
    },
    hr:{
      ...hrStyle,
      background: aquaColor,
      borderColor:aquaColor,
      marginLeft:5
    },
    skillValue:{
        display:"block",
        padding:"4px 17px",
        borderRadius:"15px",
        border: '2px solid',
        borderColor:aquaColor,
        background:"transparent",
        color:whiteColor,
        textTransform:"capitalize",
        ...transition,
        cursor:"default",
        "&:hover,&:focus":{
          background:aquaColor
      },
    }
})


const emblemCardStyle = theme =>({
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
  card: {
    overflow:"hidden",
    display: 'flex',
    background: "transparent",
    margin:0,
    padding:0
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent:"center",
    alignItems:"center",
  },
  content: {
    color:whiteColor
  },
  controls: {
    display: 'flex',
    justifyContent:"center",
    alignItems:"center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  title:{
    color:whiteColor,
    textTransform:"capitalize",
    marginTop:"40%"
  },
  titleWrap: {
    justifyContent:"center",
    alignItems:"center",
  },
  subtitle:{
    color:greyColor
  },
  media:{
    position:"relative",
    width:"70%",
    height:"auto",
    margin:"auto",
    left:0,
    top:"5%",
    right:0,
    bottom:0,
  },
  emblemAnimation:{
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
  hr:{
    ...hrStyle,
    background: aquaColor,
    borderColor:aquaColor,
    marginLeft:"10%",
    marginTop:"5%",
  },
});



export  {workspaceAbilitiesStyle,
        complitedTasksCardStyle,
        skillsCardStyle,
        emblemCardStyle};
