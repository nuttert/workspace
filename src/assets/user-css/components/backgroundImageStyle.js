import {drawerWidth } from 'assets/user-css/commonStyles';

const backgroundImageStyle = theme => ({
    backgroundImage:{
    position: "absolute",
    backgroundSize: "cover",
    height:"120%",
    bottom:0,
    left:0,
    margin:"auto",
    right:"0",
    top:"0%",
    zIndex:"-1",
    [theme.breakpoints.between('xs', 'sm')]: {
      left:"-300px",
    },
  },
  darkLayer:{
      content:"",
      position:"absolute",
      top:0,
      left:0,
      margin:"auto",
      width:"100%",
      height:"100%",
      background: "rgba(0,0,0,0.8)",
      background: "-moz-linear-gradient(top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 100%)",
      background: "-webkit-gradient(left top, left bottom, color-stop(0%, rgba(0,0,0,0.8)), color-stop(100%, rgba(0,0,0,0.15)))",
      background: "-webkit-linear-gradient(top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 100%)",
      background: "-o-linear-gradient(top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 100%)",
      background: "-ms-linear-gradient(top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 100%)",
      background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 100%)",
      filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000', GradientType=0 )",
  }
});
export default backgroundImageStyle;
