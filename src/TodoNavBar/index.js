import React from 'react';
import './TodoNavBar.css';


function TodoNavBar() {

    return (
        <nav className="TodoNavBar">
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo">
                    <i className="material-icons todo-app-logo">done_all</i>
                    ToDo
                </a>
            </div>
        </nav>
    );
}

export { TodoNavBar };