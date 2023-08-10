import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";




function TodoForm() {

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    const onCancel = (event)=>{
        event.preventDefault();
        setOpenModal(false)
    }

    const onchange = (event) =>{
        setNewTodoValue(event.target.value)
    }

    return(
        <form onSubmit={onSubmit}>
            <label> Escribe Nuevo TODO</label>
            <textarea
                placeholder="Ingrese nueva tarea"
                value={newTodoValue}
                onChange={onchange}
            />
            <div className="TodoForm-buttonContainer">

                <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
        </form>
    )

}

export {TodoForm}