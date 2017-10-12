import React, {Component} from 'react';
import {HomeTiles} from './nav/hometiles';

export class Home extends Component {
    render() {
      return (
        <div>
            <h1 className='title'>willkommen.</h1>
            <HomeTiles/>
        </div>
      );
    }
  }