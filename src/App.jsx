import "./App.css";
import About from "./components/About";
import Contact from "./components/contact";
import Intro from "./components/Intro";
import Projects from "./components/projects";
import Skills from "./components/Skills";
import cv from "./assets/PromiseCV.pdf";
export default function App() {
  return (
    <div className='p-2 space-y-7 pb-7 md:px-30 xl:px-65'>
      <Intro />
      <About />
      <Skills />
      <ResumeDownload />
      <Projects />
      <Contact />
    </div>
  );
}

function ResumeDownload() {
  function handleDownload() {
    const link = document.createElement("a");
    link.href = "../assets/PromiseCv.pdf";
    link.download = "PromiseCV.pdf";
    link.click();
  }

  return (
    <button
      onClick={handleDownload}
      className='bg-gradient-to-br from-purple-500 to-red-400 text-white p-2 text-center rounded-lg'
    >
      Download CV
    </button>
  );
}
