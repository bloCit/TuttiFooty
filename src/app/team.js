import React, {Component} from 'react';

export class Team extends Component {
    render() {
      return (
        <div>
            <h1 className='title'>team.</h1>
            <h1 className='title'>{this.props.match.params.teamid}</h1>
        </div>
      );
    }
  }