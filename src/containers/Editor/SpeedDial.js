import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import Icon from '@material-ui/core/Icon';

import {style} from "containers/Editor/editorStyles";
import { render } from '@testing-library/react';

const useStyles = makeStyles(style);

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <FavoriteIcon />, name: 'Like' },
];

 function OpenIconSpeedDial({position,...rest}) { 
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const direction = "down";

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    return (

      <div className={classes.rootSpeedDeal} {...rest}  style={position}>
      <SpeedDial
      ButtonProps={{ color: "green" }} 
      ariaLabel="SpeedDial example"
      className={classes.speedDial}
      hidden={hidden}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction={direction}
    >
      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={handleClose}
        />
      ))}
    </SpeedDial>
      </div>
    );
}



export default class WrapperOpenIconSpeedDial extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      position: null
    };
  }
  
  render(){
    return <OpenIconSpeedDial position={this.state.position} />
  }
}
