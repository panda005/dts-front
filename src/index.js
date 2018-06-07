import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/skin-blue.min.css';
import 'font-awesome/css/font-awesome.css';

document.body.classList.add("skin-blue");
document.body.classList.add("sidebar-mini");

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
