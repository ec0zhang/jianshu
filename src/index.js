import React from 'react';
import ReactDOM from 'react-dom';
import './style';
// import './common/static/iconfont';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
