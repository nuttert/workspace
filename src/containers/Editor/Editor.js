

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import buttonStyles from 'containers/Editor/styles/buttonStyles.css';
import toolbarStyles from 'containers/Editor/styles/toolbarStyles.css';

import {customStyleMap,style,blockStyleMap} from "containers/Editor/editorStyles";
import {
  EditorState,
  RichUtils,
  CompositeDecorator,
  DefaultDraftBlockRenderMap
} from 'draft-js';

import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from 'draft-js-buttons';

import createToolbarPlugin, { Separator } from 'draft-js-static-toolbar-plugin';
import Editor, { composeDecorators } from 'draft-js-plugins-editor';
import isSoftNewlineEvent from 'draft-js/lib/isSoftNewlineEvent';
import {getSelectedBlock} from "draftjs-utils";
import InlineToolbar from './Tooltip';
import SpeedDeal from 'containers/Editor/SpeedDial';
import {addNewBlockAt,getCurrentBlock} from "containers/Editor/utils";
import EditorSlider from "containers/Editor/Slider/editorSlider";
import SettingsBlockBar from "containers/Editor/SettingsBlockBar/SettingsBlockBar";
import _map from 'lodash/map';
import { List } from 'immutable';






const useStyles = makeStyles(style);
var onChangeNoNeed = false;




class HeadlinesPicker extends React.Component {
  componentDidMount() {
    setTimeout(() => { window.addEventListener('click', this.onWindowClick); });
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onWindowClick);
  }

  onWindowClick = () =>
    // Call `onOverrideContent` again with `undefined`
    // so the toolbar can show its regular content again.
    this.props.onOverrideContent(undefined);

  render() {

    const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
    return (
      <div>
        {buttons.map((Button, i) => // eslint-disable-next-line
          <Button key={i} {...this.props} />
        )}
      </div>
    );
  }
}

class HeadlinesButton extends React.Component {
  onClick = () =>
    // A button can call `onOverrideContent` to replace the content
    // of the toolbar. This can be useful for displaying sub
    // menus or requesting additional information from the user.
    this.props.onOverrideContent(HeadlinesPicker);

  render() {
    return (
      <div >
        <button onClick={this.onClick} >
          H
        </button>
      </div>
    );
  }
}

const toolbarPlugin = createToolbarPlugin({
  theme: { buttonStyles, toolbarStyles }
});
const { Toolbar } = toolbarPlugin;
const plugins = [toolbarPlugin];









const getSelectionRange = () => {
  let selection = window.getSelection();

  if (selection.rangeCount === 0) return null;
  selection = selection.getRangeAt(0);
  if(selection.collapsed) return null;
  return selection;
};


const urlCreator = window.URL || window.webkitURL;



export default function CustomEditor(props) {
  const decorator = new CompositeDecorator([
    {
      strategy: findLinkEntities,
      component: Link
    }
  ]);

  const classes = useStyles();
  const [state, setState] = React.useState(
    {inlineToolbar: { show: false, position: {} },
    editorState: EditorState.createEmpty(decorator),
  }
  );
  
  const getBlockStyle = blockStyleMap(classes);
  const editorWrapRef = React.createRef();
  const editorRef = React.createRef();
  const speedDealRef = React.createRef();
  const tooltipRef = React.createRef();
  const currentSettingsRef = React.createRef();
  const focus = () => {editorRef.current.focus()}
  const getEditorState = () => state.editorState;

  const handleDroppedFiles = (selection, files)=> {
    const filteredFiles = files
      .filter(file => (file.type.indexOf('image/') === 0));

    if (!filteredFiles.length) {
      return 'not_handled';
    }

    const blocks =  {slides: _map(
      filteredFiles,
      file => ({ url: urlCreator.createObjectURL(file) })
    )};
    
    blocks.merge = (map)=> {return {...blocks,...map}}
    blocks.get = (index)=>{return blocks[index]}
    const newBlock = addNewBlockAt(
      state.editorState,
      selection.getAnchorKey(),
      'SLIDER',
      blocks
    );
    console.log("fadfsdDROPPP",getCurrentBlock(state.editorState),getCurrentBlock(
      newBlock
    ))
    onChange(newBlock,"OK");
    onChangeNoNeed = true;
    console.log("fadfsdDROPPPEEEEND",getCurrentBlock(state.editorState));
    return 'handled';
  }


  const getSelectionCoords = (selectionRange) => {
    const editorBounds = editorWrapRef.current.getBoundingClientRect();
    const rangeBounds = selectionRange.getBoundingClientRect();
  
    const rangeWidth = rangeBounds.right - rangeBounds.left;
    const offsetLeft = (rangeBounds.left - editorBounds.left) + (rangeWidth / 2);
    const offsetTop = rangeBounds.top - editorBounds.top;
    return { offsetLeft, offsetTop };
  };

  const getCoordinatsFromRect = rect=>{
    const editorBounds = editorWrapRef.current.getBoundingClientRect();
    
    const rangeWidth = rect.right - rect.left;
    const offsetLeft = (rect.left - editorBounds.left);
    const offsetTop = rect.top - editorBounds.top;
    return { offsetLeft, offsetTop };
  }

  const setSpeedDealCoordinates = ()=>{
    let selectedBlock = getSelectedBlock(state.editorState);
    selectedBlock = document.querySelector(`div[data-offset-key^="${selectedBlock.key}"]`);
    if(!selectedBlock) {console.error("Can't get current block"); return;}
    const wrapRect = selectedBlock.getBoundingClientRect();
    const coordinats = getCoordinatsFromRect(wrapRect);
    const selectedElement = {top:coordinats.offsetTop,
      left:coordinats.offsetLeft};
    speedDealRef.current.setState({position:selectedElement});
  }

  const setCurrentSettings = ()=>{
    console.log("fadfsd55555",getCurrentBlock(state.editorState))
    let selectedBlock = getSelectedBlock(state.editorState);
    const type = selectedBlock.type;
    switch(type){
      case "SLIDER":
        let slides = selectedBlock.getData().get('slides');
        if(List.isList(slides)) slides = slides.toJS();
        if(!slides) {console.error("Slides not found",selectedBlock.getData());return;}
        
        currentSettingsRef.current.setState({slides,slidesPreview:[...slides]});break;
      default:currentSettingsRef.current.setState({slides:[],slidesPreview:[]})
    }
  }

  const setTooltipCoordinates = ()=>{
    const editorState = state.editorState;
    if (!state.editorState.getSelection().isCollapsed()) {
      const selectionRange = getSelectionRange();
      
      if (!selectionRange) {
        tooltipRef.current.setState({show:false})
        return;
      }
      const selectionCoords = getSelectionCoords(selectionRange);

      tooltipRef.current.setState({show:true,position: {
        top: selectionCoords.offsetTop,
        left: selectionCoords.offsetLeft
      }});
   
    }else{
      tooltipRef.current.setState({show:false})
    }
  }

  
  React.useEffect(() => {
    setSpeedDealCoordinates();
    setTooltipCoordinates();
    setCurrentSettings();
  });

  const setLink=() =>{
    const urlValue = prompt('Введите ссылку', '');
    const { editorState } = state;
    const contentState = editorState.getCurrentContent();

    const contentStateWithEntity = contentState.createEntity(
      'LINK',
      'SEGMENTED',
      { url: urlValue }
    );

    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });

    setState({
      ...state,
      editorState: RichUtils.toggleLink(
        newEditorState,
        newEditorState.getSelection(),
        entityKey
      )
    }, () => {
      setTimeout(() => this.focus(), 0);
    });
  }


  function onChange(editorState,ok){
   
    if(onChangeNoNeed){onChangeNoNeed = !onChangeNoNeed;return;}
    console.log("fadfsdONCHANGE",getCurrentBlock(editorState),ok)
      setState({ editorState});
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
      const types = blockType.split(',');
      blockType = [... new Set(types)].join(',');
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

    const blockRendererFn = customBlockRenderer(
      onChange,
      getEditorState
    );
  
    const handleReturn = (e)=> {
      const { editorState } = state;
  
      if (isSoftNewlineEvent(e)) {
        onChange(RichUtils.insertSoftNewline(editorState));
        return 'handled';
      } else if (!e.altKey && !e.metaKey && !e.ctrlKey) {
        const currentBlock = getCurrentBlock(editorState);
        const blockType = currentBlock.getType();
  
        if (blockType === 'SLIDER') {
          onChange(addNewBlockAt(editorState, currentBlock.getKey()));
          return 'handled';
        }
      }
    }
    const {editorState, inlineToolbar,selectedElement} = state;

    return (
<>
      <div
      className={classes.root}
      ref={editorWrapRef}
      onMouseDown={focus}
      
    >
          <Editor
            ref={editorRef}
            className={classes.editor}
            editorState={editorState}
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
            customStyleMap={customStyleMap}
            blockStyleFn={getBlockStyle}
            handleDroppedFiles={handleDroppedFiles}
            handleReturn={handleReturn}
            blockRenderMap={RenderMap}
            blockRendererFn={blockRendererFn}
            plugins={plugins}
          />
        </div>
        {
         <InlineToolbar
              ref={tooltipRef}
              editorState={editorState}
              onToggleSpan={toggleInlineStyle}
              onToggleBlock={toggleBlockType}
              setLink={setLink}
            />
        }
        <SpeedDeal
          ref={speedDealRef}
          editorState={editorState}
          onToggleSpan={toggleInlineStyle}
          onToggleBlock={toggleBlockType}
          position={selectedElement}
        />
        
        <SettingsBlockBar 
        onMouseDown={(e)=>{e.preventDefault()}}
        className={classes.settingsBar} 
        ref={currentSettingsRef}
        getEditorState={getEditorState}
        setEditorState={onChange}/>
        
        <Toolbar style={{background:"black"}}>
        {
          // may be use React.Fragment instead of div to improve perfomance after React 16
          (externalProps) => (
            <div>
              <BoldButton {...externalProps} />
              <ItalicButton {...externalProps} />
              <UnderlineButton {...externalProps} />
              <CodeButton {...externalProps} />
              <Separator {...externalProps} />
              <HeadlinesButton {...externalProps} />
              <UnorderedListButton {...externalProps} />
              <OrderedListButton {...externalProps} />
              <BlockquoteButton {...externalProps} />
              <CodeBlockButton {...externalProps} />
            </div>
          )
        }
      </Toolbar>
        
      </>
      
    );
  }





  function findLinkEntities(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(
      (character) => {
        const entityKey = character.getEntity();
        return (
          entityKey !== null &&
          contentState.getEntity(entityKey).getType() === 'LINK'
        );
      },
      callback
    );
  }
  
  const Link = (props) => {
    const classes = useStyles();
    const { url } = props.contentState
      .getEntity(props.entityKey).getData();
  
    return (
      <a href={url} title={url} className={classes.link}>
        {props.children}
      </a>
    );
  };

  const customBlockRenderer = (setEditorState, getEditorState) => (contentBlock) => {
    const type = contentBlock.getType();
  
    switch (type) {
      case 'SLIDER':
        return {
          component: EditorSlider,
          props: {
            getEditorState,
            setEditorState,
          }
      };
  
      default: return null;
    }
  };
  


  const RenderMap = {
    ...DefaultDraftBlockRenderMap,

  };
