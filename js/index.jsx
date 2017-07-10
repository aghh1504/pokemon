import React, {Component} from 'react';
import ReactDOM from 'react-dom';
require('../scss/main.scss');
import App from './App.jsx';

// document.addEventListener('DOMContentLoaded', () => {
//     ReactDOM.render(
//     <App />,
//     document.getElementById('app')
//     );
// });

ReactDOM.render(<App />, document.getElementById('app'));
