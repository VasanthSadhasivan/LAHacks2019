import React, { Component } from 'react';
import { Row } from 'simple-flexbox';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="component-app">
        <Row horizontal='center'>
          <h1>LAHacks </h1>
        </Row>
        <Row horizontal='center'>
          <h2>Please select your organization: </h2>
        </Row>

        <Row flexGrow={1} horizontal='space-between'>
          <button style={styles.box}>
            <span> Blue Shield </span>
          </button>

          <button style={styles.box}>
            <span> Dignity Health </span>
          </button>

          <button style={styles.box}>
            <span> Kaiser Permanente </span>
          </button>
        </Row>
        <Row flexGrow={1} horizontal='space-between'>
          <button style={styles.box}>
            <span> Mercy Hospital </span>
          </button>

          <button style={styles.box}>
            <span> UCI Health </span>
          </button>

          <button style={styles.box}>
            <span> UCLA Health </span>
          </button>
        </Row>
        <Row horizontal='flex-start'>
          <button style={styles.box}>
            <span> UCSD Health </span>
          </button>
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
    //borderColor: 'white',
    backgroundColor: '#FFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 20
  },
}