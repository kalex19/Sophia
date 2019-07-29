import React from 'react';
import './App.css';
import ListContainer from '../../containers/ListContainer/ListContainer';
import Form from '../../containers/Form/Form';

export const App = () => {
		return <div>
    <h1 className="app-title">SOPHIA</h1>
    <Form/>
    <ListContainer/>
    </div>;
	}

export default App;
