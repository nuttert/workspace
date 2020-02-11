import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { ReactComponent as rightArrow } from 'assets/img/right-arrow.svg';
import { ReactComponent as upArrow } from 'assets/img/styled-up-arrow.svg';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';





import {
  workspaceAbilitiesStyle,
  complitedTasksCardStyle,
  skillsCardStyle,
  emblemCardStyle
} from "assets/user-css/components/cardsStyles";

const useStylesEmblemCard = makeStyles(emblemCardStyle);
const useStylesWorkspaceAbilities = makeStyles(workspaceAbilitiesStyle);
const useStylesTasksCard = makeStyles(complitedTasksCardStyle);
const useStylesSkillsCardStyle = makeStyles(skillsCardStyle);



function EmblemCard(props) {
  const classes = useStylesEmblemCard();
  const { emblem,fraction,...rest} = props;
  return (
      <emblem.get className={classes.media }/>
  );
};
function WorkspaceAbilitiesCard(props) {
  const classes = useStylesWorkspaceAbilities();
  const { image, ability, subtitle, ...rest } = props;
  return (
    <Card {...rest} className={classes.card}>
      <CardMedia
        component={image}
        className={classes.media}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} component="h5" variant="h5" noWrap>
            {ability}
          </Typography>
          <Typography className={classes.subtitle} variant="subtitle2" noWrap>
            {subtitle}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

function TasksCard(props) {
  const classes = useStylesTasksCard();
  const { image, ability, subtitle, subtitle2, ...rest } = props;
  return (
    <Card {...rest} className={classes.card}>
      <CardMedia
        component={image}
        className={classes.media}
      />
      <div className={classes.details}>

        <GridContainer item justify="center" alignItems="center">
          <Typography className={classes.title} component="h4" variant="h4" noWrap>
            {ability.value + " orders"}

          </Typography>
          <CardMedia
            component={rightArrow}
            className={classes.svgImg}
          />
        </GridContainer>

        <Typography className={classes.subtitle} variant="subtitle1" noWrap>
          {subtitle}
        </Typography>
        <GridContainer item justify="center" alignItems="center">
          <CardMedia
            component={upArrow}
            className={classes.svgImg}
          />
          <Typography className={classes.subtitle2} variant="subtitle1" noWrap>
            {ability.increasing + ` relative ${ability.relative}`}
          </Typography>
        </GridContainer>
      </div>
    </Card>
  );
};

function SkillsCard(props) {
  const classes = useStylesSkillsCardStyle();
  
  const { skillValues,expanded, uniqueValue,title,handleChange, ...rest } = props;
  console.error(uniqueValue)

  return (
    <ExpansionPanel 
    className={classes.card} expanded={expanded === uniqueValue} onChange={handleChange(uniqueValue)}>
   
      <ExpansionPanelSummary className={classes.titleWrap} expandIcon={<ExpandMoreIcon className={classes.icon} />}>
      <hr className={classes.hr} />
        <GridContainer item xs={12} justify="center" alignItems="center">
            <Typography className={classes.title}  style={{marginTop:"3%"}}>{title}</Typography>
        </GridContainer>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails className={classes.panelDetails}>
        <GridContainer
        style={{overflowY:"scroll",margin:"0"}}
        direction="row"
        alignItems="center"
        justify="center"
        spacing={1}
        xs={12}>
        {
          skillValues && skillValues.map(value =>{
            return (<GridItem 
              key={value}>
              <Button fullWidth={true} className={classes.skillValue}>
              
              <Typography className={classes.subtitle} variant="h6" noWrap>
              {value}
              </Typography>
              </Button>
              </GridItem>)
          })
        }
         
          
      </GridContainer>
      </ExpansionPanelDetails>

    </ExpansionPanel>
  );
};



export {
  WorkspaceAbilitiesCard,
  TasksCard,
  SkillsCard,
  EmblemCard
}
