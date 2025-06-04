import './App.css'
import About from './components/About'
import Contact from './components/contact'
import Intro from './components/Intro'
import Projects from './components/projects'
import Skills from './components/Skills'
export default function App(){
  return (
    <div className='p-2 space-y-7 pb-7 md:px-30 xl:px-65'>
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}