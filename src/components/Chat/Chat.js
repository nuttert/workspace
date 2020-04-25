import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ChatFeed } from 'react-bell-chat'
import { whiteColor, aquaColor,leftBarOffset, text1,text2,text3, blackColor } from '../../assets/user-css/commonStyles';
import { GiftedChat } from 'react-web-gifted-chat';
import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';
import InputBase from '@material-ui/core/InputBase';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import AttachFileIcon from '@material-ui/icons/AttachFile';

const useStyles = makeStyles(
  (theme)=>
({
  leftOffset:{
    ...leftBarOffset(theme),
  },
  chatWrapper:
   { 
     position:"absolute",
     left:"25%",
     right:"20%",
      top:0,
      bottom:0,
      background:"#f7f8f8",
      borderLeft:`1px solid ${aquaColor}`
    },
  inputArea:{

  },
  icon: {
    width: "30px",
    height: "auto",
    fontSize: "24px",
    position:"absolute",
    top:0,
    bottom:0,
    left:0,
    right:0,
    margin:"auto",
    fontSize: '1.5rem',
    marginRight: '1rem',
    color: aquaColor,
    cursor: 'pointer',
    transition: 'color 200ms',
    


  },
  wrapInput: {
    background: 'white',
    textAlign: 'center',
    margin:0,
    bottom:0,
    paddingBottom:0
},

backgroundImage:{
  position:"absolute",
  backgroundSize: "cover",
  backgroundPosition: "center",
  
  top:0,
  bottom:0,
  right:0,
  margin:"auto",
  height:"100%",
  width:"100%"
},
darkLayer:{
    content:"",
    position:"absolute",
    top:0,
    left:0,
    margin:"auto",
    width:"100%",
    height:"100%",
    background: "rgba(0,0,0,0.85)",
    background: "-moz-linear-gradient(top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 100%)",
    background: "-webkit-gradient(left top, left bottom, color-stop(0%, rgba(0,0,0,0.85)), color-stop(100%, rgba(0,0,0,0.15)))",
    background: "-webkit-linear-gradient(top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 100%)",
    background: "-o-linear-gradient(top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 100%)",
    background: "-ms-linear-gradient(top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 100%)",
    background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 100%)",
    filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000', GradientType=0 )",
},
input: {
  boxSizing: 'border-box',
  flexBasis: '4rem',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  padding: '0 0.5rem 0 1.5rem',
  background:"white",
}, 
inputMessage: {
    border: 'none',
    backgroundImage: 'none',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1rem',
    borderRadius: '1.125rem',
    flexGrow: 2,
    boxShadow: '0 0 1rem rgba(black, 0.1),0rem 1rem 1rem -1rem rgba(black, 0.2)',
    
    fontFamily: 'Red hat Display, sans-serif',
    fontWeight: 400,
    letterSpacing: '0.025em',
    "&:placeholder": {
      color: text3
    }
  }



  
}));

export default function Chat({image}) {
  const classes = useStyles();
  const [state,setState] = React.useState({
    messages: [
      {
        id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          id: 2,
          name: 'React',
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
        },
      },
    ],
  });



  const onSend = (messages = []) =>{
    setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  const renderInputToolbar = (props)=>{
    return (
      <GridContainer 

      className={classes.wrapInput}>
      <GridItem 
      style={{background:"black"}}
      alignItems="center"
      justify="center"
      style={{position:"relative"}}> 
      <AttachFileIcon className={classes.icon} /> 
      </GridItem>

                <InputBase
                multiline={true}  
                inputProps={{ 'aria-label': 'naked' }}
                className={classes.inputMessage} placeholder="Schreibe eine Nachricht"/>
                <GridItem 
                alignItems="center"
                justify="center"
                style={{position:"relative"}}> 
                <div >{props.renderSend()} </div>
                </GridItem>
      </GridContainer>
    );
  };

  return (
    <div className={classes.leftOffset}> 
    <div 
    
    className={classes.chatWrapper}> 
    <div 
    className={classes.backgroundImage}
    style={{
      backgroundImage: "url(" + image + ")"
    }}>  <div className={classes.darkLayer}></div></div>
    <GiftedChat
    messages={state.messages}
    onSend={(messages) => onSend(messages)}
    renderAvatar={
      (props)=>(<Avatar alt="Profile Picture"  />)
    }
    renderSend={()=>(<SendIcon className={classes.icon}/>)}
    user={{
      id: 1,
    }}
    renderInputToolbar={renderInputToolbar}
  />
 
  </div>
  </div>

  );
}
