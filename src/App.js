import React from 'react';
import './App.css';
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Sidebar from './components/Sidebar/Sidebar';
import NavigationUpBar from './components/NavigationUpBar/NavigationUpBar';

import BackgroundImage from 'containers/BackgroundImage';

import routes from './routes';
import styles from "assets/user-css/App/appStyle";
import classNames from 'classnames';


const useStyles = makeStyles(styles);

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/user") {
        return (
          <Route
            exact path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/user" to="/user/profile" />
  </Switch>
);

function App({...rest }) {
  const classes = useStyles();
  let pageHeader = React.createRef();
  let [mainPanelWide,setMainPanelWide] = React.useState(true);
  // React.useEffect(() => {
  //   if (window.innerWidth > 991) {
  //     const updateScroll = () => {
  //       if(!pageHeader.current) return;
  //       let windowScrollTop = window.pageYOffset / 3;
  //       pageHeader.current.style.transform =
  //         "translate3d(0," + windowScrollTop + "px,0)";
  //     };
  //     window.addEventListener("scroll", updateScroll);
  //     return function cleanup() {
  //       window.removeEventListener("scroll", updateScroll);
  //     };
  //   }
  // });
  return (
    <div className="App">
  <NavigationUpBar 
  routes={routes}
    logoText={"Workspace"
  }
    setMainPanelWide={setMainPanelWide}
    open={!mainPanelWide}
    color={"blue"}
    {...rest}
  />
  <BackgroundImage divRef={pageHeader} />
  <div 
  className={
    classNames(classes.mainPanel,
      classes.panel,
      {[classes.mainPanelWide]:mainPanelWide})} 
      >
    {switchRoutes}
  </div>
    </div>
  );
}

export default App;
