import './App.css';

import Nav from './components/Nav';
import Intro from './components/Intro/index';
import About from './components/About/index';
import Skills from './components/Skills/index';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SideBar from './components/SideBar';


// Animations
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
        easing: 'ease-out-back', // default easing for AOS animations
        duration: 750, // values from 0 to 3000, with step 50ms
        mirror: true
    });
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
