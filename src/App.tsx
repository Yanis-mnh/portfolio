import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <About />
        <ProjectPage />
        <Contact />
      </div>
    </>
  );
}

export default App;
