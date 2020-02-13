import {
  blackColor,
  whiteColor,
  hexToRgb,
  defaultFont,
  styledFont,
  border,
  aquaColor,
  transition
} from 'assets/user-css/commonStyles'

const style = theme => ({
  button :{
    fill:whiteColor,
    color:whiteColor
  },
  menuItem:{
    background:blackColor,
    color:whiteColor,
    "&:hover":{
      background:"rgba(" +
      hexToRgb(blackColor) +
      ", 0.56)"
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color: whiteColor
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  "button svg ":{
    fill: '#ddd',
  },
  
  "button:hover, button:focus" :{
    background: '#444',
    outline: 0 /* reset for :focus */
  },
  
  active :{
    color: '#6a9cc9',
  },
  
  "active svg" :{
    fill: '#6a9cc9',
  },

  toolbar :{
    boxShadow: '0px 1px 3px 0px rgba(220,220,220,1)',
    zIndex: 2,
    boxSizing: 'border-box',
    position: 'fixed',
    bottom: 0,
    left:"5%",
    right:0,
    margin:"auto",
    background:blackColor,
    left: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      left: theme.spacing(10) + 1,
    },
    [theme.breakpoints.down('sm')]: {
      left: 0
    },
    "&:before" :{
      background:blackColor,
      content: '""',
      position:"absolute",
      width:"100%",
      height:"100%",
      margin:"auto",
      top:0,
      left:"-6%",
      bottom:0,
    }
  },
  
  "toolbar:after" :{
    borderColor: 'rgba(255, 255, 255, 0)',
    borderTopColor: '#333',
    borderWidth: 4,
    marginLeft: '-4px',
  },
  select:{
    color:whiteColor,
  },
  inputLabel:{
    color:aquaColor,
   
  }
  

  
})

export default style;
