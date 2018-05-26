import React from 'react';
import ReactDOM from 'react-dom';
import {Hello} from './app/hello.jsx';
import {registerWorker} from './register-worker.js';

registerWorker();
ReactDOM.render(
    <Hello/>,
    document.getElementById('app')
);

