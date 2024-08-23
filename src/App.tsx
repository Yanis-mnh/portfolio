import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import ProjectPage from "./components/ProjectPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <div id="top-page"></div>
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
