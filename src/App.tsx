import './styles/global.css';
import './styles/animations.css';
import './styles/responsive.css';

import Nav from './components/Nav/Nav';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import SideBar from './components/SideBar/SideBar';


// Animations
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { addJelloAnimation } from './utils/animations';

function App() {

  useEffect(() => {
    AOS.init({
        easing: 'ease-out-back', // default easing for AOS animations
        duration: 750, // values from 0 to 3000, with step 50ms
        mirror: true
    });
    addJelloAnimation();
  }, [])

  return (
    <>
      <main className='overflow-hidden w-full'>
          <Nav />
          <Intro />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <SideBar />
      </main>
    </>
  )
}

export default App
