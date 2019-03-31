import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../src';

export default class CompanyCard extends Component {

  render() {
    return (
      <div>
        <Link to={"/" + this.props.name}>
          <button style={styles.box}>
            {this.props.name}
          </button>
        </Link>
        
      </div>
    )
  }
}




const styles = {
  box: {
    width: 200,
    padding: 20,
    borderColor: 'white',
    backgroundColor: '#FFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 15,
    marginBottom: 30,
  },
}
