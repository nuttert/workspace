import React from 'react';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import profileReducer from './redux/reducers/profileReducer';
import {logger} from 'redux-logger';
import thunk from "redux-thunk";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const middleware = [logger(),thunk];

export default createStore(
  combineReducers({
    profile:profileReducer
  }),
  {},
  applyMiddleware(logger,thunk)
);
