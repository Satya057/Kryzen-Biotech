import { Box, Button, FormControl, Highlight, Image, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import LoginLeftBox from './LoginLeftBox'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { useDispatch } from 'react-redux'
import { getUserLogin } from '../../redux/Auth/action'

function Login() {
  let [show, setShow] = useState(false)

  let [username, setUsername] = useState("mor_2314")
  let [password, setPassword] = useState("83r5^_")
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let location = useLocation()
  let comminFrom = location.state?.data || "/"
  console.log(comminFrom)
  let handleForm = (e) => {
    e.preventDefault()
    let payload = {
      username,
      password
    }

    dispatch(getUserLogin(payload))
    setTimeout(() => {
      navigate(comminFrom, { replace: true })
    }, 1000);

  }
  return (
    <motion.div // Add motion to the wrapping div
      initial={{ opacity: 0, x: -100 }} // Initial animation state
      animate={{ opacity: 1, x: 0 }} // Animation when component mounts
      transition={{ duration: 0.5 }} // Transition duration
    >
      <Box m={"auto"} boxShadow={"md"} width={{ base: "95%", sm: "55%", md: "70%", lg: "65%", xl: "50%" }} h={"80vh"} mt={20} display={"flex"}>
        <LoginLeftBox />
        <Box gap={5} padding={{ base: 4, sm: 6, md: 6, lg: 8, xl: 10 }} display={"flex"} alignItems={"center"} flexDir={"column"} justifyItems={"center"}  w={{ base: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" }}>

          <Logo />
          <Text>Make your shopping easy</Text>
          <Box  width="100%"  >
            <form onSubmit={handleForm} >
              <Stack spacing={8}>
                <Input
                  value={username}
                  placeholder='Username'
                  variant="flushed"
                  borderBottom="3px solid skyblue"
                  onChange={(e) => setUsername(e.target.value)}
                  _focus={{ borderBottomColor: "blue.500" }}
                  style={styles.input}
                />

                <InputGroup>
                  <Input
                    value={password}
                    placeholder='Password'
                    type={show ? 'text' : 'password'}
                    variant="flushed"
                    borderBottom="3px solid skyblue"
                    onChange={(e) => setPassword(e.target.value)}
                    _focus={{ borderBottomColor: "blue.500" }}
                    style={styles.input}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button
                      h='1.75rem'
                      size='sm'
                      variant={'ghost'}
                      onClick={() =>
                        setShow((show) => !show)
                      }>
                      {show ? <ViewIcon color={"skyblue"} /> : <ViewOffIcon color={"skyblue"} />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Input
                  type={"submit"}
                  cursor={"pointer"}
                  placeholder={"Login"}
                  bgColor={"rgb(44, 203, 203)"}
                  color={"white"}
                  style={styles.loginButton}
                  _hover={{ transform: 'scale(1.05)' }}
                />
                <Text>
                  Don't have an account? <Link to={"/signup"} style={{ fontWeight: 600, color: "skyblue" }} _hover={{ textDecoration: 'underline' }}>Sign up</Link>
                </Text>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </motion.div> // Closing motion div
  )
}

export default Login

const styles = {
  input: {
    transition: 'border-color 0.3s ease-in-out', // Add transition effect
  },
  loginButton: {
    transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out', // Add transition effect
    borderRadius: '5px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '10px 20px',
    marginTop: '20px',
  },
};
