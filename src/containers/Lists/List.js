import React from 'react';
import { deleteListThunk } from '../../thunks/deleteListThunk';
import { deleteItemThunk } from '../../thunks/deleteItemThunk';
import { updateItemThunk } from '../../thunks/updateItemThunk';
import { updateListThunk } from '../../thunks/updateListThunk';
import { connect } from 'react-redux';

export class List extends React.Component {
	render () {
		return (
			<article className="list-body">
				<input value={this.props.list.title}
									onChange={e => {
										this.props.list.title = e.target.value;
										this.forceUpdate();
									}}
									onBlur={() => this.props.updateList(this.props.list)}/>
				<ul className="item-task">
					{this.props.items.map(item => {
						return (
							<li className="">
								<input type="checkbox" />
								<input
									value={item.task}
									onChange={e => {
										item.task = e.target.value;
										this.forceUpdate();
									}}
									onBlur={() => this.props.updateItem(item)}
								/>
								<button name="deleteBtn" onClick={() => this.props.deleteItem(item.id)}>
									X
								</button>
							</li>
						);
					})}
				</ul>
				<button onClick={() => this.props.deleteList(this.props.id)}>Delete List</button>
			</article>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	deleteItem: id => dispatch(deleteItemThunk(id)),
	deleteList: id => dispatch(deleteListThunk(id)),
  updateItem: item => dispatch(updateItemThunk(item)),
  updateList: list => dispatch(updateListThunk(list))
});

export default connect(null, mapDispatchToProps)(List);