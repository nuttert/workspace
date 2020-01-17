import React from "react";
import classNames from "classnames";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import emblems from './emblems';
import skills from './skills';

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import DefaulCard from "components/Cards/defaultCard";

import styles from "assets/user-css/components/skillsBlocksStyle";

const useStyles = makeStyles(styles);

export default function SkillsBlocks(props){
  const classes = useStyles();
  const {fraction,...rest} = props;

  const emblem = emblems[fraction];

  function Skills() {
    return (
      <React.Fragment>
      {Object.entries(skills).map(
        ([key,data])=>{
          console.error(key,data)
          return (
          <GridItem xs={6}>
            <DefaulCard image={data.icon} subtitle={data.name}/>
          </GridItem>
          )
        }
      )}
      </React.Fragment>
    );
  }

  function Emblem(){
    if(!emblem) return;
    return (
        <GridItem >
          <emblem.get   className={classes.img + " " + classes.emblemImg }/>
        </GridItem>
    );
  }

  return (
      <GridContainer item {...rest} 
      direction="row" 
      alignItems="flex-start" justify="center" 
      xs={12}  spacing={3}
      style={{position:"relative",padding:0}}
      >

        <GridContainer  
        direction="column"
        justify="flex-end"
        alignItems="flex-start" 
        item spacing={0} md={4} xs={12} 
        
        className={classes.block + " " + classes.emblemContainer}>
          <Emblem />
        </GridContainer>

        <GridContainer  
          direction="row" 
          item  spacing={0} 
          md={4} xs={12} 
          className={classes.block} 
          style={{background:"transparent",padding:0}}>
          <Skills />
        </GridContainer>

        <GridContainer  
        md={3} xs={12} 
        direction="column"  item  spacing={0} className={classes.block}>
          <Skills />
        </GridContainer>
      </GridContainer>
  );
}
