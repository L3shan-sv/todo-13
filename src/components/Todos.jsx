import React from "react";

const Todos = ({todos, setTodos}) => {

    const handleClick = (e) => {
        console.log("I am clicked");
        console.log(e);
        
        
    }

    const handlDelete = (id) => {
        let newArray = todos.filter((todo) => id !== todo.id);
        setTodos(newArray);
        console.log(newArray);
    }


    if (todos.length == 0) {
        return <p>No todos for today</p>
    }
    
    return (
        <ul>
            {todos.map((todo) => <li key={todo.id}>
                <span>id: {todo.id}</span>
                <button onClick={() => handlDelete(todo.id)} >delete</button>
            </li>
            )}
        </ul>
    )
}


export default Todos