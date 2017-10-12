import React, {Component} from 'react';

const styles = {
  footer: {
    padding: '0.5rem',
    backgroundColor: '#1f1f1f',
    textAlign: 'center',
    color: 'white',
    bottom: '0px'
  }
};

export class Footer extends Component {
  render() {
    return (
      <footer style={styles.footer}>
        Build with ♥ by the&nbsp;genius guys.
      </footer>
    );
  }
}
