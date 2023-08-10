import React from 'react'

function useLocalStorage(itemName, initialValue) {
    const [item, setItems] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)



    React.useEffect(()=>{

        setTimeout(()=>{
            try {
                const localStorageItems = localStorage.getItem(itemName)

                let parsedItems;
                if(!localStorageItems) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItems = initialValue
                  }else{
                    parsedItems = JSON.parse(localStorageItems)
                    setItems(parsedItems)
                  }

                  setLoading(false)

               } catch (error) {
                setLoading(false)
                setError(true)
               }

        }, 2000)

    },[])





    const saveItem = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems))
      setItems(newItems);

    }

    return {
        item,
        saveItem,
        loading,
        error
    }


  }

  // const defaultTodos = [
//   {text:'Primera tarea', completed: true},
//   {text:'Segunda tarea', completed: false},
//   {text:'Tercera tarea', completed: false},
//   {text:'Cuarta tarea', completed: false}
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

// localStorage.removeItem('TODOS_V1');




  export {useLocalStorage}