import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Error from '../Error/Error';
import Home from '../Home/Home';
import List from '../../containers/Lists/List'
import { connect } from 'react-redux';

export const App = (props) => {
  console.log(props)
	return (
		<div>
			<Route exact path="/" component={Home} />
			<Route
				path="/lists/:id"
				render={({ match }) => {
					const id = match.params.id;
          const list = props.lists.find(l => l.id == id);
          console.log(list)
					const items = props.items.filter(i => i.list_id == id);
					return <List list={list} items={items} />;
				}}
			/>
			<Route component={Error} />
		</div>
	);
};

export const mapStateToProps = state => ({
  lists: state.lists,
  items: state.items
})

export default connect(mapStateToProps)(App);
