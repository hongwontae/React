import React, { useContext } from "react";
import TodoItem from "./TodoItem";

import {TodoContext} from '../store/todo-context'

import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  
  const {items} = useContext(TodoContext)


  return (
    <>
      <ul className={classes.todos}>
        {items.map((ele) => {
          return (
            <TodoItem
              key={ele.id}
              text={ele.text}
              iden={ele.id}
            ></TodoItem>
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
