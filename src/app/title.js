var React = require('react');

var styles = {
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#cf4646',
    color: 'white'
  },
  h1: {
    fontWeight: 300,
    fontSize: '4rem',
    margin: '1rem'
  },
  logo: {
    height: '12rem',
    backgroundColor: 'white',
    borderRadius: '1rem',
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '2rem',
    margin: '.5rem'
  }
};

module.exports = React.createClass({
  render: function () {
    return (
      <div style={styles.title}>
        <h1 style={styles.h1}>Willkommen</h1>
        <div>
          <img style={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/200px-Borussia_Dortmund_logo.svg.png"/>
          <img style={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Logo_FC_Bayern_M%C3%BCnchen.svg/200px-Logo_FC_Bayern_M%C3%BCnchen.svg.png"/>
        </div>
        <h2 style={styles.h2}>Always a pleasure scaffolding your apps.</h2>
      </div>
    );
  }
});
