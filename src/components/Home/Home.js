import React from 'react';
import ListContainer from '../../containers/ListContainer/ListContainer';
import Form from '../../containers/Form/Form';
import './Home.css';
      
 const Home = () => {
    return (
      <div>
        <h1 className="app-title">SOPHIA</h1>
        <Form />
        <ListContainer />
      </div>
    )
  };

  export default Home;
      