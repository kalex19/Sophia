import React from 'react';
import { deleteListThunk } from '../../thunks/deleteListThunk';
import { deleteItemThunk } from '../../thunks/deleteItemThunk';
import { updateItemThunk } from '../../thunks/updateItemThunk';
import { updateListThunk } from '../../thunks/updateListThunk';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './List.css';

export class List extends React.Component {
	render () {
		return (
			<article className="list-body">
				<input
					value={this.props.list.title}
					onChange={e => {
						this.props.list.title = e.target.value;
						this.forceUpdate();
					}}
					onBlur={() => this.props.updateList(this.props.list)}
					className="list-title"
				/>
				{this.props.items.length == 0 && <p className="no-items-text">No items available</p>}
				{!this.props.items.length == 0 &&<ul>
					{this.props.items.map(item => {
						return (
							<li className="item-task-bullet">
								<input type="checkbox" />
							 <input
									value={item.task}
									onChange={e => {
										item.task = e.target.value;
										this.forceUpdate();
									}}
									onBlur={() => this.props.updateItem(item)}
									className="item-task"
								/>
								<button name="deleteBtn" onClick={() => this.props.deleteItem(item.id)} className="delete-item-btn">
									X
								</button>
							</li>
						);
					})}
				</ul>}
				<Link to={`/`}>
				<button onClick={() => {
					this.props.deleteList(this.props.list.id)
					this.props.items.forEach(item => this.props.deleteItem(item.id))
				}}
				 className="delete-list-btn">
					Delete List
				</button>
				</Link>
				<Link to={`/`}>
					<button className="home-btn">Go Home</button>
				</Link>
			</article>
		);
	}
}

export const mapDispatchToProps = dispatch => ({
	deleteItem: id => dispatch(deleteItemThunk(id)),
	deleteList: id => dispatch(deleteListThunk(id)),
	updateItem: item => dispatch(updateItemThunk(item)),
	updateList: list => dispatch(updateListThunk(list))
});

export default connect(null, mapDispatchToProps)(List);

List.propTypes = {
	deleteItem: PropTypes.func,
	deleteList: PropTypes.func,
	updateItem: PropTypes.func,
	updateList: PropTypes.func
};
