import React, {Component} from 'react';
import axios from 'axios';

import {NavTile} from './navtile';

const styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  techs: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
};

export class HomeTiles extends Component {
  constructor() {
    super();
    this.state = {tiles: []};
  }

  componentDidMount() {
    axios
      .get('app/nav/hometiles.json')
      .then(response => {
        this.setState({tiles: response.data});
      });
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.techs}>
          {this.state.tiles.map((tile, i) => (
            <NavTile key={i} tile={tile}/>
          ))}
        </div>
      </div>
    );
  }
}
