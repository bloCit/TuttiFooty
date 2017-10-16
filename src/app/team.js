import React, {Component} from 'react';
import {Link} from 'react-router-dom'

const styles = {
  tech: {
    height: '100%',
    width: '100%',
    border: '1px solid lightgray',
    borderRadius: '1rem',
    margin: '1rem',
    padding: '1rem'
  },
  logo: {
    width: '5rem',
    height: '5rem',
    float: 'right',
    margin: '0 0 .5rem .5rem'
  },
  h3: {
    fontSize: '1.5rem',
    margin: '0 0 2rem 0'
  }
};
export class Team extends Component {
  constructor() {
    super();
    this.state = {team:{}, players:[]};
  }

  componentDidMount() {
    dataAPI.getTeamInfo(this.props.match.params.teamid, this);
  }
    render() {
      return (
        <div>
            <h1 className='title'>{this.state.team.name + "."}</h1>
            {this.state.players.map((player, i) => (
              <Link className='col-md-3' to={"/player/" + player.id}>
              <div className='tech' style={styles.tech}>
                <h1 title={player.name} className='text-center'>{player.name}</h1>
                <small>{player.type}</small>
              </div>
            </Link>
          ))}
        </div>
      );
    }
  }