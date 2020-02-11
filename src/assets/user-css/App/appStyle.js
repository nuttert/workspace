import {
  drawerWidth,
  transition
} from 'assets/user-css/commonStyles';

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  mainPanel: {
    position: "relative",
    float: "right",
    maxHeight: "100%",
    overflowScrolling: "touch",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
  },
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)"
  },
  map: {
    marginTop: "70px"
  },
  panel:{
    minHeight:"100%"
  }
});

export default appStyle;
