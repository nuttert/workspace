import React from "react";
import './styles.scss';
// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

import {
  EditorState,
  SelectionState,
  Modifier
} from 'draft-js';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconClose from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CheckIcon from '@material-ui/icons/Check';


import _without from 'lodash/without';
import _concat from 'lodash/concat';
import _map from 'lodash/map';
import _times from 'lodash/times';
import Dropzone from 'react-dropzone';
// core components
import Fab from '@material-ui/core/Fab';
import { transition,aquaColor } from 'assets/user-css/commonStyles';
import Type from 'prop-types';

import { Map } from 'immutable';
import {getSelectedBlock} from "draftjs-utils";

import {
  SortableContainer,
  SortableElement,
  sortableHandle,
} from 'react-sortable-hoc';
import arrayMove from "array-move"



const urlCreator = window.URL || window.webkitURL;

const useStyles = makeStyles(theme => ({
  listItem:{
    alignItems:"center",
    justifyContent:"center"
  },
  itemIcon: {
    width: "110px",
    height: "auto",
    fontSize: "24px",
    lineHeight: "30px",
    float: "right",
    marginRight: "15px",
    textAlign: "center",
    verticalAlign: "middle",
  },
  margin: {
    margin: theme.spacing(1),
  },
  alignCenter:{
    alignItems:"center",
    justifyContent:"center"
  },
  settingIconWrapper:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:50,
    ...transition,
    "&:hover":{
      webkitTransform: "scale(1.4)",
      mozTransform: "scale(1.4)",
      msTransform: "scale(1.4)",
      oTransform: "scale(1.4)",
      transform: "scale(1.4)"
    }
  },
  addIcon:{
    fill:aquaColor
  },
  checkIcon:{
    fill:aquaColor
  },
  dragHandle:{
    cursor: "row-resize"
  },
  deleteIcon:{
    cursor:"pointer"
  }
}));


const DragHandle = sortableHandle(() => <MenuIcon />);

function SettingsBlockBar({slides,state,setState,onMouseDown,style,...props}) {
  const classes = useStyles();
  const editorContainerWidth = 578;


  const onAddingSlide = (files) =>{
    console.log("sdfsafd")
    setState({
      ...state,
      filesLoaded: false,
      slidesPreview: _concat(state.slidesPreview, _map(files, file => ({url:urlCreator.createObjectURL(file)})))
    });
  }

  // const closeSettings = () =>{
  //   setState({ ...state,displaySettings: false });

  //   const slides = state.slidesPreview.slice().map(url => ({ url }));

  // }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setState({
      ...state,
      slidesPreview: arrayMove(state.slidesPreview, oldIndex, newIndex)
    });
  };

  const removeSlide = (removedSlideIndex) =>{
    const currentSlidesPreview = state.slidesPreview.slice();
    const removedSlide = currentSlidesPreview[removedSlideIndex];
    setTimeout(() => {
      setState({
        ...state,
        slidesPreview: _without(currentSlidesPreview, removedSlide)
      });
    }, 0);
  }

  const SortableItem = new SortableElement(({ value, itemsLength ,itemIndex}) => {
    return (
   
    <ListItem className={classes.listItem} >
    <ListItemIcon />
    <ListItemIcon className={classes.dragHandle} > <DragHandle  /> </ListItemIcon>
      <ListItemIcon ><img
      className={classes.itemIcon}
      src={value}
      alt=""
    /></ListItemIcon>
    <ListItemIcon onMouseDown={()=>removeSlide(itemIndex)} className={classes.deleteIcon}> <DeleteIcon /></ListItemIcon>
    </ListItem>
    )});

  const SortableList = new SortableContainer(({ items }) => {
    if(!items) return (<></>);
    return (
    <List className="slides">
      {items.map((value, index) =>
        <SortableItem
          key={`item-${ index }`}
          index={index}
          itemIndex={index}
          itemsLength={items.length}
          value={value.url}
          
        />
      )}
    </List>
  )});

  const updateData = (data) =>{
    const editorState = props.getEditorState();
    const content = editorState.getCurrentContent();
    let block = getSelectedBlock(editorState);
    const selection = new SelectionState({
      anchorKey: block.key,
      anchorOffset: 0,
      focusKey: block.key,
      focusOffset: block.getLength()
    });
    
    const newContentState = Modifier.setBlockData(content, selection, data);
    const newEditorState = EditorState.push(editorState, newContentState);
    setTimeout(() => {props.setEditorState(newEditorState)});
  }



  return (
  slides && slides.length ? 
    <div className={"settings-container"} onMouseDown={onMouseDown} style={style}>
     { 
      <div className="slides-preview-container">
          <GridContainer sm={12}> 
          
          <GridItem sm={6}>
              <Dropzone
              accept="image/*"
              style={{ display: 'inline' }}
              onDrop={onAddingSlide}
            >
            {
              ({getRootProps, getInputProps}) => (

                  <div {...getRootProps()} className={classes.settingIconWrapper}>
                    <input {...getInputProps()} />
    
                    <AddIcon className={classes.addIcon}/>

                  </div>
      
              )
            }
            
            </Dropzone>
          </GridItem>

          <GridItem sm={6} className={classes.settingIconWrapper}> 
          <CheckIcon className={classes.checkIcon} 
            onMouseDown={()=>updateData({slides:state.slidesPreview})} /></GridItem>
        </GridContainer>
     
          <div style={{ position: 'relative' }}>
            <SortableList
              style={{ position: 'relative' }}
              items={state.slidesPreview}
              onSortEnd={onSortEnd}
              useDragHandle
              helperClass="g-sortable-helper"
              lockAxis="y"
              axis="y"
            />

        </div>
      </div>}
    </div>: null
)
    }


    export default class WrapperSettingsBlockBar extends React.Component{
      constructor(props) {
        super(props);
        this.state = {
          slides:[],
          filesLoaded: false,
        displaySettings: false,
        slidesPreview:  []
        };
        this.state.slidesPreview = this.state.slides.map(slide => slide.url);
        console.log("fdafadsfassadfasdfd1",this.state.slidesPreview)
      }
      
      render(){
        const {...rest} = this.props;
        return (
        <SettingsBlockBar slides={this.state.slides} {...rest}  state={this.state} setState={this.setState.bind(this)} />);
      }
    }

