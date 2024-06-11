import React, { useState } from 'react';
import { Box, Button, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import LoginLeftBox from './LoginLeftBox';

function Signup() {
    const [show, setShow] = useState(false);
    const [resetFormVisible, setResetFormVisible] = useState(false);
    const [email, setEmail] = useState('');

    const handleForm = (e) => {
        e.preventDefault();
        // Your form submission logic here
    };

    const handleResetFormSubmit = (e) => {
        e.preventDefault();
        // Your password reset submission logic here
    };

    return (
        <Box>
            <Box m="auto" boxShadow="md" width={{ base: "95%", sm: "55%", md: "70%", lg: "65%", xl: "50%" }} h="80vh" mt={20} display="flex">
                <LoginLeftBox />
                <Box gap={5} padding={{ base: 4, sm: 6, md: 6, lg: 8, xl: 10 }} display="flex" alignItems="center" flexDirection="column" justifyItems="center" border="1px solid red" w={{ base: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" }}>
                    <Logo />
                    <Text>Make your shopping easy</Text>
                    <Box width="100%" >
                        {!resetFormVisible ? (
                            <form onSubmit={handleForm}>
                                <Stack spacing={5}>
                                    <Input placeholder='Username' variant="flushed" borderBottom="3px solid skyblue" />
                                    <Input placeholder='Fullname' variant="flushed" borderBottom="3px solid skyblue" />
                                    <Input placeholder='Email' variant="flushed" borderBottom="3px solid skyblue" />
                                    <InputGroup>
                                        <Input placeholder='Password' type={show ? 'text' : 'password'} variant="flushed" borderBottom="3px solid skyblue" />
                                        <InputRightElement width='4.5rem'>
                                            <Button h='1.75rem' size='sm' variant='ghost' onClick={() => setShow(!show)}>
                                                {show ? <ViewIcon color="skyblue" /> : <ViewOffIcon color="skyblue" />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <InputGroup>
                                        <Input placeholder='Confirm password' type={show ? 'text' : 'password'} variant="flushed" borderBottom="3px solid skyblue" />
                                        <InputRightElement width='4.5rem'>
                                            <Button h='1.75rem' size='sm' variant='ghost' onClick={() => setShow(!show)}>
                                                {show ? <ViewIcon color="skyblue" /> : <ViewOffIcon color="skyblue" />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <Button type="submit" cursor="pointer" style={styles.registerBtn}>Register</Button>
                                </Stack>
                            </form>
                        ) : (
                            <form onSubmit={handleResetFormSubmit}>
                                <Stack spacing={5}>
                                    <Input placeholder='Email' variant="flushed" borderBottom="3px solid skyblue" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <Button type="submit" cursor="pointer" style={styles.resetBtn}>Reset Password</Button>
                                </Stack>
                            </form>
                        )}
                        <Text mt={4}>
                            Already have an account? <Link to="/login" style={{ fontWeight: 600, color: "skyblue" }}>Login here</Link>
                        </Text>
                        <Text mt={2}>
                            Forgot your password?{' '}
                            <Link to="#" style={{ fontWeight: 600, color: "skyblue" }} onClick={() => setResetFormVisible(!resetFormVisible)}>Reset here</Link>
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

// Inline styles
const styles = {
    registerBtn: {
        backgroundColor: 'rgb(44, 203, 203)',
        color: 'white',
        cursor: 'pointer',
        padding: '10px 20px',
        borderRadius: '5px',
        transition: 'transform 0.3s ease-in-out',
        border: 'none',
        outline: 'none',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '10px', // Add some spacing between buttons
    },
    resetBtn: {
        backgroundColor: 'rgb(44, 203, 203)',
        color: 'white',
        cursor: 'pointer',
        padding: '10px 20px',
        borderRadius: '5px',
        transition: 'transform 0.3s ease-in-out',
        border: 'none',
        outline: 'none',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    }
};

export default Signup;
