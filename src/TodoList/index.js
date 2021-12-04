import React from 'react';
import './TodoList.css'

function TodoList(props) {
  return (
    <section className="listSection">
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };