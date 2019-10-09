import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome5/css/fontawesome-all.css';
import './css/index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import config from "./config";

let browserRouter =
    <BrowserRouter basename={config.BASENAME}>
        <App/>
    </BrowserRouter>;

ReactDOM.render(browserRouter, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
