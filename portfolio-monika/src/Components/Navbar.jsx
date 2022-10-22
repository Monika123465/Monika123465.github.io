import { Link } from "react-router-dom"
import {
 Text,Container,Box,Button
} from "@chakra-ui/react"
function Navbar(){
    return (<>
    <Box width="100%"  bg="rgb(231,233,254)">

        <Box fontSize="30px"  width="70%" margin="auto" height="60px" display="flex" justifyContent="space-around"   >
        <Box>
            <Text color="#5c6bc0">Monika </Text>
        </Box>
        <Box display="flex" justifyContent="space-around" gap="60px"  >
             <Link to="/about"><Text>About</Text></Link>
                   <Link to="/skills" ><Text>Skills </Text></Link>
                    <Link to="/projects" ><Text>Projects</Text></Link>
                    
                    <Link to="/contact"><Button border="1px solid red">Contact Me</Button></Link>
                    <Link to="/resume" ><Text>Resume</Text></Link>
                    </Box>
                    </Box>
                    </Box>
                    
                    
    </>
    )
}

export default Navbar