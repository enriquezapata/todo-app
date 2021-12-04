import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  const headerText = totalTodos > 0 ? "Has completado " + completedTodos + " de " + totalTodos + " TODOs" : "No tienes tareas";

  return (
    <h2 className="TodoCounter">{headerText}</h2> 
  );
}

export { TodoCounter };