import React, {Component} from 'react';
import {Link} from 'react-router-dom'

const styles = {
  tech: {
    height: '15rem',
    width: '15rem',
    border: '1px solid lightgray',
    borderRadius: '1rem',
    margin: '1rem',
    padding: '1rem',
    position: 'relative'
  },
  logo: {
    width: '100%',
    height: '100%',
    position:'relative'
  },
  h3: {
    fontSize: '1.5rem',
    margin: '0 0 0rem 0',
    position:'abosulte',
    top: '10px',
    left: '10px',
  },
  h4: {
    margin: '0 0 0rem 0',
    position:'abosulte',
    top: '10px',
    left: '10px',
  }
};

//Abchecken ob Logo hinterlegt ist
function renderImageTag(_el){
  var divStyle = {};
  if(!!_el.props.tile.logo && _el.props.tile.logo != ""){
     divStyle = {
      backgroundImage: 'url(' + _el.props.tile.logo + ')',
      width: '100%',
      height: '100%',
      backgroundSize: 'contain'
    }
  }
  return divStyle
}

export class TeamTile extends Component {
  render() {
    return (
      
    //Geht bestimmt auch besser...
      <Link to={window.location.pathname + "/" + this.props.tile.key}>
        <div className='tech' style={styles.tech}>
        {/* <img style={renderImageTag(this)}/> */}
          <h3 style={styles.h3}>
            {this.props.tile.title}
          </h3>
          <h4 style={styles.h4}>({this.props.tile.key})</h4>
        </div>
      </Link>
    );
  }
}

// was das?
TeamTile.propTypes = {
  tile: React.PropTypes.object.isRequired
};
