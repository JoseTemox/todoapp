import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {

  const {
    stateSearchValue,
    setStateSearchValue
  } = React.useContext(TodoContext)


    const onchange = (event) => {
        // console.log('se escribe');
        // console.log(event);
        // console.log(event.target.value);
        setStateSearchValue(event.target.value)

    }
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      onChange={onchange}
      value={stateSearchValue}
    />
  );
}

export { TodoSearch };