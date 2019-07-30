import React, { Component } from 'react';
import List from '../../containers/Lists/List';
import { connect } from 'react-redux';
import { getItems, getLists } from '../../utils/apicalls';
import * as actions from '../../actions';
import './ListContainer.css';

export class ListContainer extends Component {

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
  render() {
    const lists = this.props.lists.map(list => {
      const items = this.props.items.filter(item => item.list_id == list.id)
      return (
        <List {...list} items={items}/>
      )
    })
    return (
      <div className="list-container">
        {lists}
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  items: state.items,
  lists: state.lists
});

export const mapDispatchToProps = dispatch => ({
  addAllItems: items => dispatch(actions.addAllItems(items)),
  addAllLists: lists => dispatch(actions.addAllLists(lists)),
	hasError: message => dispatch(actions.hasError(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
