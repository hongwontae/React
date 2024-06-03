import { FormEvent, useContext, useRef } from "react";
import classes from './NewTodo.module.css'
import { TodoContext } from "../store/todo-context";

const NewTodo:React.FC = ()=>{

    const {addItem} = useContext(TodoContext);

    const inputRef = useRef<HTMLInputElement>(null)

    function submitHandler(event : FormEvent){
        event.preventDefault();
        const enteredText = inputRef.current?.value;

        if(enteredText!.trim().length === 0){
            return;
        }

        addItem(enteredText!)

        inputRef.current!.value = ''
    }

    return(
        <>
            <form className={classes.form} onSubmit={submitHandler}>
                <label htmlFor="text">Todo Text</label>
                <input type="text" id="text" ref={inputRef}></input>
                <button>Add Todo</button>
            </form>
        </>
    )
}

export default NewTodo;