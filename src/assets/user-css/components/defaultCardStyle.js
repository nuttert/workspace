import {
  darkPerpleColor,
  whiteColor,
  greyColor
} from 'assets/user-css/commonStyles'

const defaultCardStyle = theme => ({
    card: {
      display: 'flex',
      background: darkPerpleColor,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      color:whiteColor
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    title:{
      color:whiteColor
    },
    subtitle:{
      color:greyColor
    },
    media:{
      width:"20%"
    }
})

export default defaultCardStyle;
