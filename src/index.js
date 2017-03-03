import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router'

import './css/index.css';
// import './css/font-awesome.min.css';

import App from './containers/App'
// import NoMatch from './NoMatch'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Redirect from='/*' to='/' />
  </Router>
), document.getElementById('root'));
