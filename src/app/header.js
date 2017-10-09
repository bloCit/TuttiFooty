/* eslint linebreak-style: ["error", "windows"] */

var React = require('react');
var styles = {
  header: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  },
  date: {
    flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: 'white'
  }
};

module.exports = React.createClass({
  render: function () {
    return (
      <header style={styles.header}>
        <p style={styles.title}>
          <a href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank" rel="noopener noreferrer">
            TuttiFooty
          </a>
        </p>
      </header>
    );
  }
});
