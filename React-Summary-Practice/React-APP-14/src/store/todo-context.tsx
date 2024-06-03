/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";
import { Todo } from "../models/Todo";

type todoObj = {
  items: Todo[];
  addItem: (text: string) => void;
  removeItem: (id: string) => void;
};

export const TodoContext = createContext<todoObj>({
  items: [],
  addItem: (text: string) => {},
  removeItem: (id: string) => {},
});

const TodoContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {

    const [data, setData] = useState<Todo[]>([]);

    function addItem(text : string){
        const newData = new Todo(text);
        setData((prevState)=>{
            return prevState.concat(newData)
        })
    }

    function removeItem(id : string){
        setData((prevState)=>{
            return prevState.filter((ele)=>{
                return ele.id !==id
            })
        })
    }


    const todoCtx : todoObj = {
        items : data,
        addItem,
        removeItem
    }


  return <TodoContext.Provider value={todoCtx}>{props.children}</TodoContext.Provider>;
};

export default TodoContextProvider;