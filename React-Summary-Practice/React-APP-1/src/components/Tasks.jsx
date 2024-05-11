/* eslint-disable react/prop-types */
import NewTask from "./NewTask";

// eslint-disable-next-line react/prop-types, no-unused-vars
function Tasks({ onTaskAdd, onTaskDelete, tasks }) {

  return (
    <>
      <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">TASK</h2>
        <NewTask onTaskAdd={onTaskAdd}></NewTask>
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet
        </p>
        <ul className="p-4 mt-8 rounded-sm bg-stone-100">
          {tasks.length === 0
            ? undefined
            : tasks.map((ele) => {
                console.log(ele.identify)
                return (
                  <li key={ele.identify} className="flex justify-between my-4">
                    <span>{ele.task}</span>
                    <button
                      onClick={()=>onTaskDelete(ele.identify)}
                      className="text-stone-700 hover:text-red-500"
                    >
                      Clear
                    </button>
                  </li>
                );
              })}
        </ul>
      </section>
    </>
  );
}

export default Tasks;
