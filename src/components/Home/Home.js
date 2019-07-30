import React, { Component } from 'react';
import ListContainer from '../../containers/ListContainer/ListContainer';
import Form from '../../containers/Form/Form';
      
export class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="app-title">SOPHIA</h1>
      <Form />
        <ListContainer />
      </div>
    )
  }
}

export default Home
      