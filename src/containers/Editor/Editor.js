

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {customStyleMap,style,blockStyleMap} from "containers/Editor/editorStyles";
import {
  Editor,
  EditorState,
  RichUtils,
} from 'draft-js';
import InlineToolbar from './Tooltip';

let needReload = false;
const useStyles = makeStyles(style);



const getSelectionRange = () => {
  let selection = window.getSelection();

  if (selection.rangeCount === 0) return null;
  selection = selection.getRangeAt(0);
  if(selection.collapsed) return null;
  return selection;
};




export default function CustomEditor(props) {
  const classes = useStyles();
  const [state, setState] = React.useState(
    {inlineToolbar: { show: false, position: {} },
    editorState: EditorState.createEmpty(),
  }
  );
  
  const getBlockStyle = blockStyleMap(classes);
  const editorRef = React.createRef();
  const focus = () => editorRef && editorRef.current.focus();

  const getSelectionCoords = (selectionRange) => {
    const editorBounds = editorRef.current.getBoundingClientRect();
    const rangeBounds = selectionRange.getBoundingClientRect();
  
    const rangeWidth = rangeBounds.right - rangeBounds.left;
    const offsetLeft = (rangeBounds.left - editorBounds.left) + (rangeWidth / 2);
    const offsetTop = rangeBounds.top - editorBounds.top;
    return { offsetLeft, offsetTop };
  };

  React.useEffect(() => {
    if(needReload){needReload=!needReload;onChange(editorState);}
  });


  const onChange = (editorState) =>{
    if (!editorState.getSelection().isCollapsed()) {
      const selectionRange = getSelectionRange();

      if (!selectionRange) {
        setState({ editorState,inlineToolbar: { show: false } });

        return;
      }

      const selectionCoords = getSelectionCoords(selectionRange);
      console.error(selectionCoords,selectionRange,editorState.getSelection(),
      editorState.getSelection().getAnchorOffset())
      setState({
        editorState,
        inlineToolbar: {
          show: true,
          position: {
            top: selectionCoords.offsetTop,
            left: selectionCoords.offsetLeft
          }
        }
      });
    } else {
      setState({ editorState,inlineToolbar: { show: false } });
    }
  }

    const toggleInlineStyle = (inlineStyle) =>{
      if(!inlineStyle)return;
      const styledEditor = RichUtils.toggleInlineStyle(
        state.editorState,
        inlineStyle
      );
      setState(
        {...state,
          editorState:styledEditor,
        })
    }

    const toggleBlockType = (blockType) =>{
      if(!blockType)return;
      needReload = true;
      setState(
        {...state,
        editorState: RichUtils.toggleBlockType(editorState,blockType)})
    }

    const handleKeyCommand = (command) => {
      const { editorState } = state;
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        setState(
          {...state,
            editorState:newState,
        })
        return true;
      }
      return false;
    }
  
    const {editorState, inlineToolbar} = state;

    return (
<>
      <div
      className={classes.root}
      ref={editorRef}
      onClick={focus}
    >
          <Editor
            className={classes.editor}
            editorState={editorState}
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
            customStyleMap={customStyleMap}
            blockStyleFn={getBlockStyle}
          />
        </div>
        {
         inlineToolbar.show
          ? <InlineToolbar
              editorState={editorState}
              onToggleSpan={toggleInlineStyle}
              onToggleBlock={toggleBlockType}
              position={inlineToolbar.position}
              
            />
          : null
        }
      </>
    );
  }





