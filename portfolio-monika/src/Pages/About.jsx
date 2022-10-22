import {
    Text,Container,Box,Button,Heading,Center,Image
   } from "@chakra-ui/react"

function About(){
    return(
        <>
        <Box width="100%"  bg="rgb(231,233,254)">
        <Box width="70%" margin="auto" display="flex" fontSize="20px" padding="6rem"   >
                <Box width="75%"   >
                    <Text fontSize="45px" fontWeight="bold" textAlign="left">Hii,I am</Text>

                    <Heading fontSize="45px" fontWeight="bold" textAlign="left" color="#5c6bc0">
                        Monika kumari
                    </Heading>
                    <Text textAlign="left">
                    A MERN Stack developer. I have a passion for technology and love working 
                    on new and exciting technologies emerging nowadays. </Text>
                    <Button display="block" width="30%" height="50px" border='1px solid red' color="black" marginBottom="40px" marginTop="40px" >Hire me</Button>
                </Box>
                <Center >
                    <Image width="60%"  src="profile.png" alt="err" />
                </Center>
            </Box>

            </Box>
        
        </>
    )

}

export default About