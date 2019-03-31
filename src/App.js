import React, { Component } from 'react';

import { Row } from 'simple-flexbox';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import './index.css';

import FileUpload from './Components/FileUpload';
import CompanyCard from './Components/CompanyCard';

class App extends Component {

  render() {
    
    return (
      <BrowserRouter>
        <Route exact path="/" render={(props) => {
          return (
            <div className="container">

              <Row horizontal='center'>
                <h1 style={titleStyle}>MediSense</h1>
              </Row>


              <Row className="row" wrap="true" justifyContent="space-around">
                <div className="one column">
                  <CompanyCard name={'UCLA Health'} />
                  <CompanyCard name={'UCI Health'} />
                  <CompanyCard name={'UCSD Health'} />
                  <CompanyCard name={'Blue Shield'} />
                </div>

                <div className="one column">
                  <CompanyCard name={'Mercy Medical'} />
                  <CompanyCard name={'Dignity Health'} />
                  <CompanyCard name={'Kaiser Permanente'} />
                </div>
              </Row>

            </div>
          );
        }
        } />
        <Route path='/:handle' component={FileUpload}/>
      </BrowserRouter>

    );
  }


}

const titleStyle = {
  fontSize: 64,
  fontWeight: 'normal',
  fontFamily: 'LibreFranklin'
}

export default App;


