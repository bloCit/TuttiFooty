import React, {Component} from 'react';
import {TeamsTiles} from './nav/teamstiles';

export class Teams extends Component {
    render() {
      return (
        <div>
            <h1 className='title'>mannschaften.</h1>
            <TeamsTiles/>
        </div>
      );
    }
  }