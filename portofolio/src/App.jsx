import React, {useState, useEffect} from "react";
import {
  Main,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
  Timeline,
} from "./components";
import Profile from "./components/Profile";
import FadeIn from "./components/FadeIn";
import './index.css';

function App() {
    // Hapus <string> karena JavaScript tidak menggunakannya
    const [mode, setMode] = useState('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn delay={1000} transitionDuration={1000}>
            <Main/>
            <Profile/>
            <Expertise/>
            <Timeline/>
            <Project/>
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;