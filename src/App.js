import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Row horizontal='center'>
          <h1>LAHacks </h1>
        </Row>
        
        <Row horizontal='center'>

          <Column flexGrow={1} horizontal='center'>
            <div style={styles.box}>
              <span> Blue Shield </span>
            </div>
          </Column>
          
          <Column flexGrow={1} horizontal='center'>
            <div style={styles.box}>
              <span> Dignity Health </span>
            </div>
          </Column>

          <Column flexGrow={1} horizontal='center'>
            <div style={styles.box}>
              <span> Kaiser Permanente </span>
            </div>
          </Column>
        </Row>
        
        </div>
    );
  }
}
export default App;

const styles = {
  box: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 20
  },
  boxWithShadow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 1.5,
    elevation: 4
  },
  boxIcon: {
    position: 'relative',
    bottom: 5,
  }
}
