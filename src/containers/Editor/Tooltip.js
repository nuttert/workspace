import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import tooltipElements from "containers/Editor/tooltipElements";
import styles from "assets/user-css/components/editorTooltipStyle";
import classNames from 'classnames';
import{
RichUtils,
} from 'draft-js';
const useStyles = makeStyles(styles);



export default ({ editorState, onToggleSpan,onToggleBlock, position }) => {
  const currentStyle = editorState.getCurrentInlineStyle();
  const currentType = RichUtils.getCurrentBlockType(editorState);
  const classes = useStyles();

  const chooseStyle = (style,type)=>e=> {
    e.preventDefault();
    onToggleSpan(style);
    onToggleBlock(type);
  };

  if(!position) return <></>;
  return (
    <div className={classes.element}>
    <Tooltip
    className={classes.tooltip}
    open={true} placement="top" 
    title={
      <Grid container alignItems="center" className={classes.root}>
      {tooltipElements.map(element=>{
        const isSelected = 
        currentType == element.type || 
        currentStyle.has(element.style);
        const elementClasses =  classNames(classes.icon,
                                          classes.element,
                                        {[classes.selectedElement]:isSelected})
        return (element.icon ?
 
        <element.icon className={elementClasses} 
        onMouseDown={chooseStyle(element.style,element.type)}
        />:
        <element.divider orientation="vertical" />)
      })}
      </Grid>
    } arrow>
      <div
        className={classes.toolbar}
        style={position}
      >
      </div>
    </Tooltip>
    </div>
  );
};
