import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import {Main} from './app/main';

import './index.less';

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
