import React from "react";
import style from "./style";

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(style);



  const BLOCK_TYPES = {
    headers:[{label: 'H1', style: 'header-one',icon:FormatQuoteIcon},
    {label: 'H2', style: 'header-two',icon:FormatQuoteIcon},
    {label: 'H3', style: 'header-three',icon:FormatQuoteIcon},
    {label: 'H4', style: 'header-four',icon:FormatQuoteIcon},
    {label: 'H5', style: 'header-five',icon:FormatQuoteIcon},
    {label: 'H6', style: 'header-six',icon:FormatQuoteIcon}],
    main:[{label: 'Blockquote', style: 'blockquote',icon:FormatQuoteIcon},
    {label: 'UL', style: 'unordered-list-item',icon:FormatListBulletedIcon},
    {label: 'OL', style: 'ordered-list-item',icon:FormatListNumberedIcon},
    {label: 'Code Block', style: 'code-block',icon:CodeIcon}]
  };

  function StyleButton(props) {
      const classes = useStyles();
      const onToggle = (e) => {
        e.preventDefault();
        props.onToggle(props.style);
      };
      let className = 'RichEditor-styleButton';
      if (props.active) {
        className += ' RichEditor-activeButton';
      }

      return (
        <BottomNavigationAction onMouseDown={onToggle} label="Recents" icon={<props.icon className={classes.button}/>} />
      );
  }
  function StyleSelect(props) {
      const classes = useStyles();
      const onToggle = (e) => {
        e.preventDefault();
        props.onToggle(props.style);
      };
      let className = 'RichEditor-styleButton';
      if (props.active) {
        className += ' RichEditor-activeButton';
      }

      return (
        <BottomNavigationAction onMouseDown={onToggle} label="Recents" icon={<props.icon/>} />
      );
  }

  const BlockStyleControls = (props) => {
    const [header, setHeader] = React.useState('H2');
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const {editorState} = props;
    const selection = editorState.getSelection();
    const handleChange = event => {
      event.preventDefault();
      event.target.value.callback();
      setHeader(event.target.value.label);

    };
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

    return (

      <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.toolbar}
    >
        {BLOCK_TYPES.main.map((type) =>
          <StyleButton
            key={type.label}
            active={type.style === blockType}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
            icon={type.icon}
          />
        )}
        {
          <FormControl className={classes.formControl}>
        <InputLabel className={classes.inputLabel}>Font</InputLabel>
          <Select
          className={classes.select}
          value={header}
          onChange={handleChange}
          renderValue={value => {return value}}
        >
       {   BLOCK_TYPES.headers.map((type) =>
          <MenuItem
            className={classes.menuItem}
  
            key={type.label}
            // active={type.style === blockType}
            // label={type.label}
            value={{callback:()=>props.onToggle(type.style),label:type.label}}
            // icon={type.icon}
          > {type.label}</MenuItem>
        )}
        </Select>
        </FormControl>
      }
        </BottomNavigation>
    );
  };

  export default BlockStyleControls;
