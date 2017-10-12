import React, {Component} from 'react';
import {HomeTiles} from './nav/hometiles';

export class Home extends Component {
    render() {
      return (
        <div className='row'>
            <h1 className='title'>willkommen.</h1>
            <br/>
            <HomeTiles/>
        </div>
      );
    }
  }