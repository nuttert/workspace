import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Editor from 'containers/Editor/Editor'

const useStyles = makeStyles(theme => ({
  root: {
      margin: theme.spacing(1),
      position:"relative",
      width: "80%",
      height: "auto",
      background: "white",
      color:"black",
      margin:"auto",
      marginTop:"10%"
    },
}));



export default function Portfolio() {
  const classes = useStyles();



  return (
    <div className={classes.root}> <Editor />
    </div>);
  }



// class MyEditor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {editorState: EditorState.createEmpty()};
//     this.onChange = editorState => this.setState({editorState});
//   }
//   render() {
//     return (
      
//     );
//   }
// }


