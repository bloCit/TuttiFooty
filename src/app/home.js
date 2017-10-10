import React, {Component} from 'react';
import {Techs} from './techs/techs';

export class Home extends Component {
    render() {
      return (
        <div>
            <h1 className='title'>willkommen.</h1>
            <Techs/>
        </div>
      );
    }
  }