import { Button, HStack, Input, Heading, Text } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Container, Box} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { auth,provider } from "../Authentication/config";
import { signInWithPopup } from "firebase/auth";
import {useEffect,useState} from "react";
import { useToast } from "@chakra-ui/react";
function Login()
{
  const toast = useToast();
    const [value,setValue]=useState('')
    const [login,setLogin]=useState(false)
    const [state,setState]=useState({email: "",password: ""})
    const [input,setInput]=useState(false)
    const {email,password}=state
    const registration=JSON.parse(localStorage.getItem('register'))
    const handleClick=() =>
    {
    signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        console.log(data.user)
        setLogin(true)
        localStorage.setItem('login',true)
        localStorage.setItem('email',data.user.email)
        localStorage.setItem('emaildetail',JSON.stringify(data))
    })
    }
    useEffect(() =>
    {
        setValue(localStorage.getItem('email'))
    })
    console.log(value)
    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== registration.password) {
          return toast({
            title: "Nope",
            position: "top-right",
            description: "password is not matching",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          //alert('password wrong')
        }
        if (email !== registration.email) {
            return toast({
              title: "Not Registerd",
              position: "top-right",
              description: "No such Email is registerd",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
            //alert('password wrong')
          }
        else
        {
            toast({
                title: "Registration",
                position: "top-right",
                description: "Registration Successfully Done",
                status: "success",
                duration: 4000,
                isClosable: true,
              });
            localStorage.setItem("logindone",JSON.stringify(state));
            setInput(true)
        }
        // console.log(state);
        setState({ email: "", password: ""});
      };
    
  return (
    <>
      <Container w="100%" h={"100vh"} mt="5rem">
        <Heading textAlign="start" margin="1rem 0">
          Log in
        </Heading>
        <HStack
          spacing="1.5rem"
          display={"flex"}
          gap="1rem"
          m={"auto"}
          wrap={"wrap"}
        >
      {value? <Navigate to={'/'} />:<Button colorScheme="twitter" leftIcon={<FcGoogle />} onClick={handleClick}>
            Log in with Google 
          </Button>}

    
        </HStack>
        

      </Container>
    </>
  );
}
export default Login;
