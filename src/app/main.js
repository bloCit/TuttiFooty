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

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    marginLeft: '50px',
    marginRight: '50px'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}>
        <Router history={browserHistory}>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/teams" component={Teams}/>
          <Route path="/teams/:teamid" component={Team}/>
        </div>
      </Router>
        </main>
        <Footer/>
      </div>
    );
  }
}
