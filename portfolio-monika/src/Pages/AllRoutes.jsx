
import {Route,Routes} from "react-router-dom"
//import PrivateRoute from "./Components/PrivateRoute"
import About from "./About"
import Contact from "./Contact"
import Project from "./Projects"
import Resume from "./Resume"
import Skills from "./Skills"



function AllRoutes(){
    return(
        <>
            <Routes>
                <Route  path="/"  element={<About/>}></Route>
                <Route  path="/skills"  element={<Skills/>}></Route>
                <Route  path="/projects"  element={<Project/>}></Route>
                <Route  path="/Resume"  element={<Resume/>}></Route>
                <Route  path="/Contact"  element={<Contact/>}></Route>
                
    
            </Routes>
        </>
    )
}

export default AllRoutes
