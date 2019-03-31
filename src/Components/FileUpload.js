import React, { Component } from 'react';
import { matchPath } from 'react-router';
import { Row } from 'simple-flexbox';
import CategoryCards from './CategoryCards';


 
 class FileUpload extends Component {
  state = {h:""}
  
  componentDidMount() {
    let match = matchPath(this.props.history.location.pathname, {
      path: '/:param',
      exact: true,
      strict: false
    })
    let parameter = match.params.param
    this.setState((state) => ({h:parameter}))
    //this.setState((state) => ({h: this.props.match.params}))
  }
  render() {
    return (
      <div className="container">

      <Row horizontal='center'>
        <h1 style={titleStyle}>{this.state.h}</h1>
      </Row>


      <Row className="row" wrap="true" justifyContent="space-around">
        <div className="one column">
          <CategoryCards name={'Atelectasis'} />
          <CategoryCards name={'Effusion'} />
          <CategoryCards name={'Emphysema'} />
          <CategoryCards name={'Fibrosis'} />
        </div>

        <div className="one column">
          <CategoryCards name={'Hernia'} />
          <CategoryCards name={'Infiltration'} />
          <CategoryCards name={'Mass'} />
          <CategoryCards name={'No finding :)'}/>
        </div>
      </Row>
      </div>
    )
  }
}
const titleStyle = {
  fontSize: 64,
  fontWeight: 'normal',
  fontFamily: 'LibreFranklin'
}

export default FileUpload;