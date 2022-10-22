import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"

import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import About from './Pages/About';
function App() {
  return (
    <div className="App">
<Navbar/>
<Contact/>
<Resume/>
<Projects/>
<Skills/>
<About/>

      
          </div>
  );
}

export default App;
