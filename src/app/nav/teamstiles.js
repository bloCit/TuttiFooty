import React, {Component} from 'react';
import axios from 'axios';

import {TeamTile} from './teamtile';

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

export class TeamsTiles extends Component {
  constructor() {
    super();
    this.state = {tiles: {standings:[{groups:[{team_standings:[]}]}]}};
  }

  componentDidMount() {
    // axios
    //   .get('https://www.openligadb.de/api/getavailableteams/bl1/2017')
    //   .then(response => {
    //     this.setState({tiles: response.data});
    //   });
    dataAPI.getTeams(this, "tiles");
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.techs}>
          {this.state.tiles.standings[0].groups[0].team_standings.map((tile, i) => (
            <TeamTile key={i} tile={tile}/>
          ))}
        </div>
      </div>
    );
  }
}
