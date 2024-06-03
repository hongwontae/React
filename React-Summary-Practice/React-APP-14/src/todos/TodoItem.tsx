import { useContext } from 'react';
import classes from './TodoItem.module.css'
import { TodoContext } from '../store/todo-context';

const TodoItem:React.FC<{text : string, iden : string}> = (props)=>{

    const {removeItem} = useContext(TodoContext);


    return(
        <>
            <li onClick={()=>removeItem(props.iden)} className={classes.item}>{props.text}</li>
        </>
    )

}
export default TodoItem;