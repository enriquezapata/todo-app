import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  const headerText = totalTodos > 0 ? "Has completado " + completedTodos + " de " + totalTodos + " TODOs" : "No tienes tareas";

  return (
    <div className="section">
      <div className="row">
        <div className="col s12 center">
          <h4>{headerText}</h4>
        </div>
      </div> 
    </div>
  );
}

export { TodoCounter };