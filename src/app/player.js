import React, {Component} from 'react';

export class Player extends Component {
  constructor() {
    super();
    //this.state = {player:{}, statistics: {seasons:[{statistics:{}}]}};
    this.state = {player:{}, statistics: {}};
  }

  componentDidMount() {
    dataAPI.getPlayerInfo(this.props.match.params.playerId, this);
  }
    render() {
      return (
        <div>
            <h1 className='title'>{this.state.player.name + "."}</h1>
            <div className='col-md-6'>
                <table className='table'>
                    <tr><td>Spiele gespielt:</td><td>{this.state.statistics.matches_played}</td></tr>
                    <tr><td>Eingewechselt:</td><td>{this.state.statistics.substituted_in}</td></tr>
                    <tr><td>Ausgewechselt:</td><td>{this.state.statistics.substituted_out}</td></tr>
                    <tr><td>Tore:</td><td>{this.state.statistics.goals_scored}</td></tr>
                    <tr><td>Vorlagen:</td><td>{this.state.statistics.assists}</td></tr>
                    <tr><td>Eigentore:</td><td>{this.state.statistics.own_goals}</td></tr>
                    <tr><td>Gelbe Karten:</td><td>{this.state.statistics.yellow_cards}</td></tr>
                    <tr><td>Gelb-Rote Karten:</td><td>{this.state.statistics.yellow_red_cards}</td></tr>
                    <tr><td>Rote Karten:</td><td>{this.state.statistics.red_cards}</td></tr>
                </table>
            </div>
        </div>
      );
    }
  }