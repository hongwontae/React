import Todos from "./todos/Todos";
import NewTodo from "./todos/NewTodo";
import TodoContextProvider from "./store/todo-context";

const App: React.FC = () => {
  return (
    <>
      <TodoContextProvider>
        <div>
          <NewTodo></NewTodo>
          <Todos></Todos>
        </div>
      </TodoContextProvider>
    </>
  );
};

export default App;
