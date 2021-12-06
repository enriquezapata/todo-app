import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };
  
  return (

    <a href="#!" className="btn-floating btn-large waves-effect waves-light CreateTodoButton" onClick={onClickButton}>
      <i className="material-icons">
        add
      </i>
    </a>
    
  );
}

export { CreateTodoButton };
