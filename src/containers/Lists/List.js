import React from 'react'

export const List = (props) => {


    return (
        <article className="list-body">
          <h2 className="list-title">{props.title}</h2>
          <ul className="item-task">
            {props.items.map(item => {
              return (<li>{item.task}</li>)
            })}
          </ul>
        </article>
    )
  };

  export default List;
