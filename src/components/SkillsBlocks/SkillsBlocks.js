import React from "react";
import classNames from "classnames";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import emblems from './emblems';
import {workspaceAbilitiesInfo,skillsInfos} from './skillsAndAbilities';

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";


import styles from "assets/user-css/components/skillsBlocksStyle";

const useStyles = makeStyles(styles);






export default function SkillsBlocks(props){
  const classes = useStyles();
  const {fraction, workspaceAbilities, skills, ...rest} = props;

  const emblem = emblems[fraction];
  const skillsInfo = skillsInfos[fraction];


 
  function Skills(){
    const [expanded, setExpanded] = React.useState(Object.keys(skillsInfo).pop());
    console.error(Object.keys(skillsInfo).pop())
    const handleChange = panel => (event, isExpanded) => {
      setExpanded(panel);
       };

    if(!skills ||
       !skillsInfo)return (<></>);

   return ( <React.Fragment>
      {Object.entries(skillsInfo).map(
        ([key,data])=>{
          const skillValues = skills[key];
          return (
          <GridItem 
          key={key}
          className={classes.offsetFromTop+" "+classes.skillsWrap+" "+classes.block }>
            <data.card  
            uniqueValue={key} 
            expanded={expanded} 
            handleChange={handleChange} 
            title={data.title} skillValues={skillValues}/>
          </GridItem>
          )
        }
      )}
      </React.Fragment>)
  };


  function Abilities() {
    return (
      <React.Fragment>
      {Object.entries(workspaceAbilitiesInfo).map(
        ([key,data])=>{
          const ability = workspaceAbilities[key];
          return (
          <GridItem xs={data.size} 

          className={classes.offsetFromTop+" "+classes.skillsWrap}>
            <data.card  image={data.icon} subtitle={data.name} ability={ability}/>
          </GridItem>
          )
        }
      )}
      </React.Fragment>
    );
  };

  function Emblem(){
    if(!emblem) return;
    return (
          <emblem.card  fraction={fraction} emblem={emblem} />
    );
  };

  return (
      <GridContainer item {...rest} 
      direction="row" 
      alignItems="stretch"  justify="center" 
      xs={12}  spacing={3}
      style={{position:"relative",padding:0
    }}
      >

      <GridContainer  
      direction="row" 
      alignItems="stretch" 
      justify="center" 
      item spacing={0} lg={8} xs={12} 
      style={{background:"transparent",padding:0}}>
            <GridContainer  
            direction="column"
            justify="center"
            alignItems="stretch" 
            item spacing={0} 
            md={5} xs={12} 
            style={{padding:0}}
            className={classes.block + " " + classes.emblemContainer+" "+classes.offsetFromTop}>
              <Emblem /> 
            </GridContainer>

            <GridContainer  
              direction="row" 
              item
               md={7} xs={12} 
              className={classes.block} 
              justify="flex-start"
              style={{background:"transparent",padding:0}}
              justify="space-between">
              <Abilities />
            </GridContainer>
      </GridContainer>


        <GridContainer  
 
        lg={3} xs={12} md={12}
        direction="column"  item  spacing={0} 
        // justify="space-between"
        className={classes.block}
        style={{background:"transparent",padding:0}}>
          <Skills />
        </GridContainer>
      </GridContainer>
  );
}
