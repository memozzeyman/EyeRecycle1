import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WasteClassifier from './components/WasteClassifier';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<WasteClassifier />, document.getElementById('root'));

serviceWorker.unregister();
