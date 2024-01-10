import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected"
import { useState } from "react";

function App() {

 const [projectsState, setProjectsState] =  useState({
  selectedProjectId : undefined,
  projects : []
 })

 const handleStartAddProject = ()=>{
  setProjectsState(prevState => {
    return {
      ...prevState,
      selectedProjectId : null,
    }
  })
 }

 let content;

 if(projectsState.selectedProjectId === undefined){
  content = <NoProjectSelected onStartAddProject={handleStartAddProject}></NoProjectSelected>
 } else if(projectsState.selectedProjectId === null){
  content=<NewProject></NewProject>
 }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar onStartAddProject={handleStartAddProject}></ProjectsSidebar>
        {content}
      </main>
    </>
  );
}

export default App;
