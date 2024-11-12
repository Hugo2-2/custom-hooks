import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/TodoReducer";


const initialState = [];

const init = () => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos || [];
}


export const useTodo = () => {

    const [todos, dispatchTodo] = useReducer( todoReducer, initialState, init );

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify( todos ));
      
    }, [todos])

    const handleNewTodo = ( todo ) => {
        const action = {
            type: 'ADD_TODO',
            payload: todo,
        }

        dispatchTodo( action );
    }

    const handleDeleteTodo = ( id ) => {
        
        const action = {
            type: 'REMOVE_TODO',
            payload: id
        }

        dispatchTodo( action );
    }

    const handleDoneTodo = ( todo ) => {
        
        const action = {
            type: 'TOGGLE_TODO',
            payload: todo
        }

        dispatchTodo( action );
    }

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleDoneTodo,

  }
}
