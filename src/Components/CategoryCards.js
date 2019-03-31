import React, { Component } from 'react'
import '../../src';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

library.add(faUpload)


export default class CompanyCard extends Component {

  render() {
    return (
      <div>
          <input id="myInput" 
                type="file" ref={(ref) => this.myInput = ref} 
                style={{ display: 'none' }} />
          <button onClick={(e)=>this.myInput.click()} style={styles.box}>
            <div style={styles.text}>{this.props.name}</div>
            <div style={styles.uploadButton}>
            <FontAwesomeIcon icon="upload"/></div>
          </button>        
      </div>
    )
  }
}

const styles = {
  box: {
    flexDirection:'row',
    width: 200,
    padding: 20,
    borderColor: 'white',
    backgroundColor: '#FFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 15,
    marginBottom: 30,
  },
  text : {
    alignSelf: 'flex-start',
    float: 'left'
  },
  uploadButton : {
    float:'right',
    fontSize: 20,
  }

}