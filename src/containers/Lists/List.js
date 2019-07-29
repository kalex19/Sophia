import React, { Component } from 'react'

export class List extends Component {
  render() {
    return (
      <div>
        <main className="list-body">
          <button className="add-item-btn">Add Item</button>
          <h2 className="list-title">{this.props.title}</h2>
        </main>
      </div>
    )
  }
}

export default List;
