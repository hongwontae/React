import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from './components/NoProjectSelected'

function App() {
  return (
    <>
      <main className="h-screen my-8 bg-amber-400 flex gap-8">
        <ProjectSidebar></ProjectSidebar>
        <NewProject></NewProject>
        <NoProjectSelected></NoProjectSelected>
      </main>
    </>
  );
}

export default App;
