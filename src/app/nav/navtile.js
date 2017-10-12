import React, {Component} from 'react';
import {Link} from 'react-router-dom'

const styles = {
  tech: {
    height: '100%',
    width: '100%',
    border: '1px solid lightgray',
    borderRadius: '1rem',
    margin: '1rem',
    padding: '1rem'
  },
  logo: {
    width: '5rem',
    height: '5rem',
    float: 'right',
    margin: '0 0 .5rem .5rem'
  },
  h3: {
    fontSize: '1.5rem',
    margin: '0 0 2rem 0'
  }
};

//Abchecken ob Logo hinterlegt ist
function renderImageTag(_el){
  if(!!_el.props.tile.logo && _el.props.tile.logo != ""){
    return <img style={styles.logo} src={_el.props.tile.logo}/>;
  }
}

function renderIconTag(_el){
  if(!!_el.props.tile.icon && _el.props.tile.icon != ""){
    return <i className={'fa ' + _el.props.tile.icon + ' fa-4x'}></i>;
  }
}

//Abchecken ob Texte gesetzt
function renderText(_el){
  var result;
  if(!!_el.props.tile.text1 && _el.props.tile.text1 != ""){
    result += <p>{this.props.tile.text1}</p>;
  }

  if(!!_el.props.tile.text1 && _el.props.tile.text1 != ""){
    result += <p>{this.props.tile.text1}</p>;
  }

  if(result){
    return result;
  }
}

export class NavTile extends Component {
  render() {
    return (
      <Link className='col-md-3' to={this.props.tile.key}>
        <div className='tech' style={styles.tech}>
        {renderImageTag(this)}
          {/* <h3 style={styles.h3}>
            {this.props.tile.title}
          </h3> */}
          <h1 title={this.props.tile.title} className='text-center'>{renderIconTag(this)}</h1>
        </div>
      </Link>
    );
  }
}

// was das?
NavTile.propTypes = {
  tile: React.PropTypes.object.isRequired
};
