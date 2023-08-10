
import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounterTitle() {
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext)


    return (
      <h1 className="TodoCounter">
        Has completado <span>{completedTodos} de {totalTodos} TODOS</span>
      </h1>
    );
  }

  export {TodoCounterTitle}