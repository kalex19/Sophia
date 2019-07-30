import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from "../../actions";
import PropTypes from 'prop-types';
import './Form.css';

export class Form extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      task: '',
      selectedList: 0
    }
  }

handleSubmit = (e) => {
  e.preventDefault();
  if(!parseInt(this.state.selectedList)){
    this.createList()
  } else {
    this.createItem(this.state.selectedList)
  }
}

createList = async () => {
  const response = await fetch('http://localhost:3002/api/v1/lists' ,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      title: this.state.title,
      })
  })
  const data = await response.json();
  await this.createItem(data.id);
  this.props.addList(data);
};

createItem = async (id) => {
  const response = await fetch('http://localhost:3002/api/v1/items',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      list_id: parseInt(id),
      task: this.state.task,
      })
  })
  const data = await response.json();
  this.props.addItem(data);
}

handleChange = (e) => {
this.setState({
  [e.target.name]: e.target.value
})
}

  render() {
    return (
     <form onSubmit={this.handleSubmit}className="form">
     <select name="selectedList" onChange={this.handleChange} className="drop-down">
       <option value="0">Create New List</option>
      {this.props.lists.map(list => {
       return <option value={list.id}>{list.title}</option>
      })}
     </select>
     {this.state.selectedList == 0 && 
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} className="title-input"/>}
        <input type="text" name="task" value={this.state.task} onChange={this.handleChange}  className="task-input"/>
        <input type="submit" value="Add Task" className="add-task-btn"/>
     </form>
    )
  }
}

export const mapStateToProps = (state) => ({
  lists: state.lists
});

export const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(actions.addItem(item)),
  addList: list => dispatch(actions.addList(list)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Form)

Form.propTypes = {
  lists: PropTypes.array,
  addItem: PropTypes.func,
  addList: PropTypes.func
}
