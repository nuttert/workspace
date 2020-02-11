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

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconClose from '@material-ui/icons/Close';

import _without from 'lodash/without';
import _concat from 'lodash/concat';
import _map from 'lodash/map';
import _times from 'lodash/times';
import Dropzone from 'react-dropzone';
// core components


import Type from 'prop-types';

import { Map } from 'immutable';


import {
  SortableContainer,
  SortableElement,
  arrayMove
} from 'react-sortable-hoc';




const urlCreator = window.URL || window.webkitURL;


const items = [
  {
    src: require("assets/img/bg1.jpg"),
    altText: "Nature, United States",
    caption: "Nature, United States"
  },
  {
    src: require("assets/img/bg3.jpg"),
    altText: "Somewhere Beyond, United States",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require("assets/img/bg4.jpg"),
    altText: "Yellowstone National Park, United States",
    caption: "Yellowstone National Park, United States"
  }
];




function CarouselSection({slides,...props}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  if(activeIndex >= slides.length)setActiveIndex(0);

  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex >= slides.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex >= 0 ? slides.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };



  

  return (
    <>
    
      <div className="section" id="carousel" onMouseDown={()=>{}}>
        <Container>
          <Row className="justify-content-center">
            <Col lg="12" md="12">

          


              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={slides}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />


                {slides && slides.map(item => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.url}
                      style={{cursor:"default"}}
                    >
                      <img src={item.url} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block" style={{cursor:"default"}}>
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                  style={{cursor:"default"}}
                >
                <div
                className="arrow left"
              >
              <ArrowBackIosIcon />
                
              </div>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                  style={{cursor:"default"}}
                >

              <ArrowForwardIosIcon />
           
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
