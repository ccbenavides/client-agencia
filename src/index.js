import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <MuiThemeProvider  muiTheme={getMuiTheme(lightBaseTheme)}>
        <App />
    </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
