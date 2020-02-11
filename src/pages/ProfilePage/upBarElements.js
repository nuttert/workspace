import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import {whiteColor} from "assets/user-css/commonStyles";
import MailIcon from '@material-ui/icons/Mail';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

const upBarElements = (classes,handleProfileMenuOpen)=>()=>{
  return (
   <>
  <div className={classes.search}>
  <div className={classes.searchIcon}>
     <SearchIcon />
 </div>
   <InputBase
   placeholder="Search..."
   classes={{
     root: classes.inputRoot,
     input: classes.inputInput,
   }}
   inputProps={{ 'aria-label': 'search' }}
 />
</div>

<div className={classes.grow} />
<div className={classes.sectionDesktop}>
 <IconButton aria-label="show 4 new mails" color="inherit">
   <Badge badgeContent={4} color="secondary">
     <MailIcon />
   </Badge>
 </IconButton>
 <IconButton aria-label="show 17 new notifications" color="inherit">
   <Badge badgeContent={17} color="secondary">
     <NotificationsIcon />
   </Badge>
 </IconButton>
 <IconButton
   edge="end"
   aria-label="account of current user"
   aria-haspopup="true"
   onClick={handleProfileMenuOpen}
   color="inherit"
 >
   <AccountCircle />
 </IconButton>
 
</div>
</>
)}

export default upBarElements;
