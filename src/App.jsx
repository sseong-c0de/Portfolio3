import "./App.css";
import Header from "./components/Header/Header.jsx";
import Intro from "./components/Intro/Intro.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
