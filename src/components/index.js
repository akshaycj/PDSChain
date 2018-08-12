import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card1 from './Card1'
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(  <MuiThemeProvider><App /> </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
