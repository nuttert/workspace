import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Editor from 'containers/Editor/Editor'

const useStyles = makeStyles(theme => ({
  root: {
      position:"absolute",
      top:0,
      width: "100%",
      minHeight: "100vh",
      background: "white",
      color:"black",
      margin:"0",
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


