
import {
  darkPerpleColor,
  pink
} from 'assets/user-css/commonStyles'
import { aquaColor } from '../commonStyles';

const skillsBlocksStyle = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  block:{
    flexGrow: 1,
    padding:0,
    margin:0,
    height:"auto",
    borderRadius:"5px",
    background:darkPerpleColor
  },
  offsetFromTop:{
    marginTop:"20px"
  },

  img: {
    position:"relative",
    width:"80%",
    maxWidth: '80%',
  },
  emblemContainer:{
    border:"1px solid",
    borderColor:aquaColor
  },

  skillsWrap:{
    [theme.breakpoints.down('sm')]: {
      padding:2,
    },
  },
  emblemContainer:{
    position:"relative",
    border:"1px solid",
    borderColor:aquaColor
  },
  skillsBlock:{
    border:"1px solid",
    borderColor:aquaColor
  }

});

export default skillsBlocksStyle;
