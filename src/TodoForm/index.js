import React from 'react';
import { TodoContext } from '../TodoContext';
import './ToDoForm.css';


function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };


    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Descripción ..."
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="waves-effect waves-light btn TodoForm-button TodoForm-button--cancel">
                    Cancelar
                </button>
                <button
                    type="submit" 
                    onClick={onSubmit}
                    className="waves-effect waves-light btn TodoForm-button TodoForm-button--add">
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
