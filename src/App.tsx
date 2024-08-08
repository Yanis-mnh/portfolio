import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <>
      <header>
        <NavBar />

        <ProjectPage />
        <Contact />
      </header>
    </>
  );
}

export default App;
