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

 const handleAddProject = (projectData)=>{
  setProjectsState(prevState => {

    const newProject = {
      ...projectData,
      id : Math.random()
    }
    return {
      ...prevState,
      selectedProjectId : undefined,
      projects : [...prevState.projects, newProject]
    }
  })
 }

 console.log(projectsState)



 let content;

 if(projectsState.selectedProjectId === undefined){
  content = <NoProjectSelected onStartAddProject={handleStartAddProject}></NoProjectSelected>
 } else if(projectsState.selectedProjectId === null){
  content=<NewProject onAdd={handleAddProject}></NewProject>
 }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar projects={projectsState.projects} onStartAddProject={handleStartAddProject}></ProjectsSidebar>
        {content}
      </main>
    </>
  );
}

export default App;
