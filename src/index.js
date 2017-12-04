import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// If you are going to use Redux for state management, and you are going to use
// the official React bindings for Redux you may wrap the App component in
// Provider component from react-redux
const Bootstrap = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<Bootstrap />, document.getElementById('root'));
registerServiceWorker();
