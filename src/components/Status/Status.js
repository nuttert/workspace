import React from 'react';
import styles from "assets/user-css/components/statusStyle";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

 

export default function OnlineStatus({status, isOnline}){
  const classes = useStyles();
  return (
    <GridContainer
    direction="row"
    justify="center" alignItems="center"
    spacing={8}
    >
      <div className={classes.point}></div>
      <h2 className={classes.text}>{status}</h2>
    </GridContainer>
  )
};
