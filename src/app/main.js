import React, {Component} from 'react';
import {Header} from './header';
import {Title} from './title';
import {Home} from './home';
import {Teams} from './teams';
import {Team} from './team';
import {Footer} from './footer';
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
        <Header/>
        <main>
        <Router history={browserHistory}>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/teams" component={Teams}/>
          <Route path="/teams/:teamid" component={Team}/>
        </div>
      </Router>
        </main>
      </div>
    );
  }
}
