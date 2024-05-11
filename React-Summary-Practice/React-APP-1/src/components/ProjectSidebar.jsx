/* eslint-disable react/prop-types */
import Button from "./Button";

// eslint-disable-next-line react/prop-types
function ProjectSidebar({ onStart, projectData, selectPage }) {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          My Project
        </h2>
        <div>
          <Button onClick={onStart}>+ Add Project</Button>
        </div>
        <ul className="mt-8">
          {projectData.map((ele) => {
            return (
              <>
                <li key={ele.id}>
                  <button
                    onClick={()=>selectPage(ele.id)}
                    className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stoen-800"
                  >
                    {ele.title}
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </aside>
    </>
  );
}

export default ProjectSidebar;
