import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';

function CreateTodoButton({setOpenModal}) {

  // const {
  //   openModal,
  //   setOpenModal
  // } = React.useContext(TodoContext)

  const onClick = (event)=>{
    // setOpenModal(!openModal)
    setOpenModal(state=>!state)

  }


  return (
    <button
      className="CreateTodoButton"
      onClick={onClick}
    >+</button>
  );
}

export { CreateTodoButton };