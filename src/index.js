require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');

var Main = require('./app/main');

require('./index.less');

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
