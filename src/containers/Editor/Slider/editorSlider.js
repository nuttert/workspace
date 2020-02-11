import './styles.scss';

import React, {
  Component,
} from 'react';

import { List } from 'immutable';

import Carousel from "containers/Editor/Slider/Carousel";
import Photo from "containers/Editor/Photo/Photo";

import {
  EditorState,
  SelectionState,
  Modifier
} from 'draft-js';
import {getSelectedBlock} from "draftjs-utils";

export default function EditorSlider (props){


    let slides = props.block.getData().get('slides');
    if(List.isList(slides)) slides = slides.toJS();

    if(slides && !slides.length){
      const editorState = props.blockProps.getEditorState();
      const content = editorState.getCurrentContent();
      let block = getSelectedBlock(editorState);
      const selection = new SelectionState({
        anchorKey: block.key,
        anchorOffset: 0,
        focusKey: block.key,
        focusOffset: block.getLength()
      });
      
      const newContentState = Modifier.setBlockType(content, selection, "");
      const newEditorState = EditorState.push(editorState, newContentState);
      setTimeout(() => props.blockProps.setEditorState(newEditorState));
      return null;
    }
    
    
        return ( slides ? 
          slides.length == 1 ?
           <Photo slide={slides[0]}/>:
          <Carousel slides={slides} {...props} /> : null)

}



// return (
//   <div className="c-image-slider">
//     {
//       (!displaySettings && slides && slides.length) ?
//         <IconSettings
//           className="icon icon-settings"
//           onClick={onSettingsIconClick}
//         /> : null

//     }
//     {
//       (!displaySettings && slides && slides.length) ?
//         <IconClose
//           className="icon icon-close"
//           onClick={remove}
//         /> : null
//     }
//     {
//       (slides && !!slides.length) &&
//         <div>
//           <div className="slides-container">
//             <div
//               className="slides"
//               style={{ left: `-${ activeSlideIndex * 100 }%` }}
//             >
              
//               {
//                 slides.map((slide, index) => (
//                   <div
//                     key={index}
//                     className="slide"
//                   >
//                     <div className="slide-inner">
//                       <img src={slide.url} alt="" />
//                     </div>
//                   </div>
//                 ))
//               }
//             </div>
//             <div
//               className="arrow left"
//               onClick={slideBack}
//             >
//               <div className="chevron-arrow-left"/>
//             </div>
//             <div
//               className="arrow right"
//               onClick={slideForward}
//             >
//               <div className="chevron-arrow-right"/>
//             </div>
//           </div>
//           <div className="slider-footer">
//             <div className="slides-text-container">
//               <div
//                 className="slide-text"
//               >
//                 <EditorBlock {...props} />
//               </div>
//             </div>
//           </div>
//         </div>
//     }
//   </div>
// );
