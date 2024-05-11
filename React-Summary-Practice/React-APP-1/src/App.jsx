import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

import { useState } from "react";

function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function taskAddHandler(text) {
    setProjects((prevState) => {
      const newTask = {
        id: prevState.selectedProjectId,
        task : text,
        identify : Math.random(),
      };

      return {
        ...prevState,
        tasks : [...prevState.tasks, newTask],
      };
    });
  }

  function taskDeleteHandler(identify) {
    setProjects(prevState => {
      return {
        ...prevState,
        tasks : prevState.tasks.filter((prevTasks)=>{
          return prevTasks.identify !== identify
        })
      }
    })
  }

  function addProjectHandler() {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjects((prevState) => {
      const newProject = {
        id: Math.random(),
        ...projectData,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleShowProject(id) {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleCancelProject() {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleDeleteProject() {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: projects.projects.filter((ele) => {
          return prevState.selectedProjectId !== ele.id;
        }),
      };
    });
  }

  const selectedProjectPageData = projects.projects.find((ele) => {
    return ele.id === projects.selectedProjectId;
  });

  let renderPage = (
    <>
      <SelectedProject
        data={selectedProjectPageData}
        onDelete={handleDeleteProject}
        onTaskAdd={taskAddHandler}
        onTaskDelete={taskDeleteHandler}
        tasks={projects.tasks}
      ></SelectedProject>
    </>
  );

  if (projects.selectedProjectId === undefined) {
    renderPage = (
      <>
        <NoProjectSelected onStart={addProjectHandler}></NoProjectSelected>
      </>
    );
  }

  if (projects.selectedProjectId === null) {
    renderPage = (
      <>
        <NewProject
          onAdd={handleAddProject}
          onCancel={handleCancelProject}
        ></NewProject>
      </>
    );
  }

  return (
    <>
      <main className="h-screen my-8 bg-amber-400 flex gap-8">
        <ProjectSidebar
          onStart={addProjectHandler}
          projectData={projects.projects}
          selectPage={handleShowProject}
        ></ProjectSidebar>
        {renderPage}
      </main>
    </>
  );
}

export default App;
