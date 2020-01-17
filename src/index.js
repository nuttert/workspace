import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store'

import profileActions from 'redux/actions/profileActions';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  theme
} from 'assets/user-css/commonStyles'

const muiTheme = createMuiTheme(theme);

store.dispatch(profileActions.fetchUserData());
store.dispatch(profileActions.fetchProfileDescriptions());

ReactDOM.render(
  <ThemeProvider theme={muiTheme}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <App />
        </Switch>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
  ,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

