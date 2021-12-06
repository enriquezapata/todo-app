import React from 'react';
import { TodoNavBar } from '../TodoNavBar';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { TodoEmpty } from '../TodoEmpty';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoModal } from '../TodoModal';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>

      <div className="container">
        <TodoNavBar />
        <TodoCounter />
        <div className="container">
          <div className="row ">
            <TodoSearch />
            <TodoList>
            {error && <TodoError />}
            {loading && <TodoLoading />}
            {(!loading && !searchedTodos.length) && <TodoEmpty />}
              
              {searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
          </div>
        </div>
      </div>

      {!!openModal && (
        <TodoModal>
          <TodoForm />
        </TodoModal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
