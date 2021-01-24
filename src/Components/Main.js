import React, { useReducer, useState } from "react";
import Todo from "../Components/Todo";

export const ACTIONS = {
 ADD_TODO: "add-todo",
 TOGGLE_TODO: "toggle-todo",
 DELETE_TODO: "delete-todo",
 EDIT_TODO: "edit-todo",
};

function reducer(todos, action) {
 switch (todos, action.type) {
  case ACTIONS.ADD_TODO:
   return [...todos, newTodo(action.payload.name)];


  case ACTIONS.TOGGLE_TODO:
   return todos.map((todo) => {
    if (todo.id === action.payload.id) {
     return { ...todo, complete: !todo.complete };
    }
    return todo;
   });


  case ACTIONS.DELETE_TODO:
   return todos.filter((todo) => todo.id !== action.payload.id);

   console.log(todos.id);

  case ACTIONS.EDIT_TODO:
       return todos.find((todo) =>  todo.id === action.payload.id)

  default:
   return todos;
 }
}

// case ACTIONS.EDIT_TODO:
//     return todos.find((todo) => todo.id === action.payload.id);
//    default:
//     return todos;

function newTodo(name) {
 return { id: Date.now(), name: name, complete: false };
}

export const Main = () => {
 const [name, setName] = useState("");
 const [todos, dispatch] = useReducer(reducer, []);

 function handleSubmit(e) {
  e.preventDefault();
  dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
  setName("");
 }

 return (
  <>
   <form onSubmit={handleSubmit}>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
   </form>
   {todos && todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
   })}
  </>
 );
};
