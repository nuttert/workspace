import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import styles from "assets/user-css/components/navigationUpBarStyle";
import classNames from "classnames";
import PropTypes from "prop-types";


import routes from '../../routes';

import MoreIcon from '@material-ui/icons/MoreVert';
import { NavLink } from "react-router-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";



const useStyles = makeStyles(styles);

const switchRoutes = (classes,handle)=>(
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/user") {
        const upBarElements = prop.upBarElements;
        if(!upBarElements) return null;
        return (
          <Route
            exact path={prop.layout + prop.path}
            component={upBarElements(classes,handle)}
            key={key}
          />
        );
      }
      return null;
    })}
  </Switch>
);


export default function NavigationUpBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const {setMainPanelWide} = props;

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  
  const {color, logo, logoText, routes } = props;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }



  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        var listItemClasses;
        listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.layout + prop.path)
          });
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        });
        return (
          <>
          {prop.divider ? (
            <Divider variant="middle" style={{background:"rgba(255,255,255,0.2)",marginBottom:prop.deviderMargin}}/>) 
            : null}
          <NavLink
            to={prop.layout + prop.path}
            className={classes.item}
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
            <ListItemIcon> <prop.icon alt={prop.name+' icon'} className={classes.itemIcon}/>  </ListItemIcon>
              <ListItemText
                primary={prop.name}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        </>
        );
      })}
    </List>
  );



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>

            {switchRoutes(classes,handleProfileMenuOpen)}

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>


        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? 

            <ChevronRightIcon 
            className={clsx({
              [classes.whiteIcon]: open,
              [classes.transparent]: !open,
            })}/> :
            <ChevronLeftIcon 
            className={clsx({
              [classes.whiteIcon]: open,
              [classes.transparent]: !open,
            })}
            />}
          </IconButton>
        </div>


        {links}

      </Drawer>
      </div>
      );
    }
