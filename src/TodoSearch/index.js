import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (

    <div className="section">
          <div className="input-field">
                <i className="material-icons prefix">search</i>
                <input id="icon_prefix" type="text" className="validate" onChange={onSearchValueChange} value={searchValue} />
                <label htmlFor="icon_prefix">Buscar tareas ...</label>
          </div>
    </div>
  );
}

export { TodoSearch };