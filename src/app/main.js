import React, {Component} from 'react';
import {Header} from './header';
import {Title} from './title';
import {About} from './about';
import {Techs} from './techs/techs';
import {Footer} from './footer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
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
        <Router>
        <div>
          <ul>
            <li><Link to="/about">About</Link></li>
          </ul>
    
          <hr/>
    
          <Route path="/about" component={About}/>
        </div>
      </Router>
        </main>
        <Footer/>
      </div>
    );
  }
}
