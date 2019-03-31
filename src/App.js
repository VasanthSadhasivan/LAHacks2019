import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import {Router, Route, Switch, BrowserRouter, Link} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';

import FileUpload from './Components/FileUpload';

class App extends Component {
  

  render() {

    const RouteShit = () => (
      <div>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/fileupload' component={FileUpload}/>
        </Switch>
      </div>
    )

    return (
      <BrowserRouter>
        <Route exact path = "/" render = { (props) => {
          return(
          <div>
          <Row horizontal='center'>
            <h1>LAHacks </h1>
          </Row>

          <Row horizontal='center'>

            <Column flexGrow={1} horizontal='center'>
            <Link to="/fileupload">
              <div style={styles.box}>
                <span> Blue Shield </span>
              </div>
              </Link>
            </Column>

            <Column flexGrow={1} horizontal='center'>
              <Link to="/fileupload">
              <div style={styles.box}>
                <span> Dignity Health </span>
              </div>
              </Link>
            </Column>

            <Column flexGrow={1} horizontal='center'>
              <Link to="/fileupload">
              <div style={styles.box}>
                <span> Kaiser Permanente </span>
              </div>
              </Link>
            </Column>
          </Row>
          </div>
          );}
        }/>

        <Route exact path = "/fileupload" component = {FileUpload}/>

        </BrowserRouter>
        
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
