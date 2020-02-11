import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { makeStyles } from '@material-ui/core/styles';

import {
  aquaColor,
  blackColor,
  whiteColor,
  defaultFont,
  transition,
  drawerWidth,
  hexToRgb
} from 'assets/user-css/commonStyles'

const styles = {
  icon:{
    fill:blackColor
  }
};

const useStyles = makeStyles(styles);

const upBarElements = (classes,handleProfileMenuOpen)=>()=>{
  const localClasses = useStyles();
  return (
   <>
  
<div className={classes.grow} />
<div className={classes.sectionDesktop}>
 <IconButton aria-label="show 4 new mails" color="inherit">
   <Badge badgeContent={4} color="secondary">
     <MailIcon className={localClasses.icon} />
   </Badge>
 </IconButton>
 <IconButton aria-label="show 17 new notifications" color="inherit">
   <Badge badgeContent={17} color="secondary">
     <NotificationsIcon  className={localClasses.icon} />
   </Badge>
 </IconButton>
 <IconButton
   edge="end"
   aria-label="account of current user"
   aria-haspopup="true"
   onClick={handleProfileMenuOpen}
   color="inherit"
 >
   <AccountCircle className={localClasses.icon} />
 </IconButton>
 
</div>
</>
)}

export default upBarElements;
