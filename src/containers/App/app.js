import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, getLists } from '../../utils/apicalls';
import * as actions from '../../actions';

export class App extends Component {
	async componentDidMount () {
    this.fetchItems()
    this.fetchLists()
  }

	fetchItems = async () => {
		try {
			const items = await getItems();
			this.props.addAllItems(items);
			this.props.hasError('');
		} catch (err) {
			this.props.hasError(err.message);
		}
	};

	fetchLists = async () => {
		try {
			const lists = await getLists();
			this.props.addAllLists(lists);
			this.props.hasError('');
		} catch (err) {
			this.props.hasError(err.message);
		}
	};

	render () {
		return <div />;
	}
}

const mapStateToProps = state => ({
  items: state.items,
  lists: state.lists
});

const mapDispatchToProps = dispatch => ({
  addAllItems: items => dispatch(actions.addAllItems(items)),
  addAllLists: lists => dispatch(actions.addAllLists(lists)),
	hasError: message => dispatch(actions.hasError(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
