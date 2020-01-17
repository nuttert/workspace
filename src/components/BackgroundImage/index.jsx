import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/user-css/components/backgroundImageStyle";

const useStyles = makeStyles(styles);
const BackgroundImage = ({image, ...rest}) =>{
  const classes = useStyles();
  const {divRef} = rest;
return(
   
    <div 
    ref={divRef}
    style={{
      backgroundImage: "url(" + image + ")"
    }}
    {...rest} className={classes.backgroundImage} >
        <div className={classes.darkLayer}></div>
    </div>
  )
}

export default BackgroundImage;

