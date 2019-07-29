import React, { Component } from 'react'
import { connect } from 'react-redux'
import { format } from 'url';

export class Form extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      task: '',
      selectedList: 0
    }
  }

  //create a new list
  //input title
  //create id - express
  //select a list to add to & create a new item
//create title task
//grocery task 
//submit

handleChange = (e) => {
this.setState({
  [e.target.name]: e.target.value
})
}

  render() {
    return (
     <form onSubmit={this.handleSubmit}>
     <select name="selectedList" onChange={this.handleChange}>
       <option value="0">Create New List</option>
      {this.props.lists.map(list => {
       return <option value={list.id}>{list.title}</option>
      })}
     </select>
     {this.state.selectedList == 0 && 
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>}
        <input type="text" name="task" value={this.state.task} onChange={this.handleChange}/>
     </form>
    )
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
