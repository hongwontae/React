import { useRef } from "react";

// eslint-disable-next-line react/prop-types
function NewTask({onTaskAdd}){

    const inputRef = useRef();

    function addTask(){
        onTaskAdd(inputRef.current.value);
        inputRef.current.value = '';
    }

return(
    <>
        <div className="flex items-center gap-4">
            <input ref={inputRef} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"></input>
            <button onClick={addTask} className="text-stone-700 hover:text-stone-950">Add Task!</button>
        </div>
    </>
)
}
export default NewTask;