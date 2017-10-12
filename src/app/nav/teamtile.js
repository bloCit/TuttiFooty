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
    float: 'right',
    margin: '0 0 .5rem .5rem'
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
// function renderImageTag(_el){
//   var divStyle = {};
//   if(!!_el.props.tile.TeamIconUrl && _el.props.tile.TeamIconUrl != ""){
//      divStyle = {
//       backgroundImage: 'url(' + _el.props.tile.TeamIconUrl + ')',
//       width: '100%',
//       height: '100%',
//       backgroundSize: 'contain'
//     }
//   }
//   return divStyle
// }

// function renderImageTag(_el){
function renderImageTag(_el){
  var divStyle = {};
  if(!!_el.props.tile.TeamIconUrl && _el.props.tile.TeamIconUrl != ""){
    return <img style={styles.logo} src={_el.props.tile.TeamIconUrl}/>;
  }
     }

export class TeamTile extends Component {
  render() {
    return (
      
    //Geht bestimmt auch besser...
      <Link to={window.location.pathname + "/" + this.props.tile.TeamId}>
        <div className='tech' style={styles.tech}>
          {renderImageTag(this)}
        {/* <img style={renderImageTag(this)}/> */}
          <h3 style={styles.h3}>
            {this.props.tile.TeamName}
          </h3>
          <h4 style={styles.h4}>({this.props.tile.TeamId})</h4>
        </div>
      </Link>
    );
  }
}

// was das?
TeamTile.propTypes = {
  tile: React.PropTypes.object.isRequired
};
