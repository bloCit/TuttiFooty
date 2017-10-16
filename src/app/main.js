import React, {Component} from 'react';
import {Header} from './header';
import {Title} from './title';
import {Home} from './home';
import {Teams} from './teams';
import {Team} from './team';
import {Footer} from './footer';
import {Spieltage} from './spieltage';
import {Player} from './player';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {browserHistory} from 'react-router';

export class Main extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <main>
        <Router history={browserHistory}>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/teams" component={Teams}/>
          <Route exact path="/spieltage" component={Spieltage}/>
          <Route path="/teams/:teamid" component={Team}/>
          <Route path="/player/:playerId" component={Player}/>
        </div>
      </Router>
        </main>
      </div>
    );
  }
}
