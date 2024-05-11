import Image from "../assets/no-projects.png";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
function NoProjectSelected({ onStart }) {
  return (
    <>
      <div className="mt-24 text-center w-2/3">
        <img
          className="w-16 h-16 object-contain mx-auto"
          src={Image}
          alt="An empty task list"
        ></img>
        <h2 className="text-xl font-bold text-stone-500 my-4">
          No Project Selected
        </h2>
        <p className="text-stone-400 mb-4">
          Select a project or get started with a new one
        </p>
        <p>
          <Button onClick={onStart}>Create New Project</Button>
        </p>
      </div>
    </>
  );
}

export default NoProjectSelected;
