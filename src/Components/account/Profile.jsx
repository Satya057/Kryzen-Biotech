import React, { useState } from 'react';
import { Box, Image, Stack, Text, Button } from '@chakra-ui/react';
// import { ModalBox } from '../TermsAndCondition';

function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImg, setProfileImg] = useState('https://i.ibb.co/6W25zQT/profile-pic.jpg'); // Default profile picture URL

  const handleUpdateProfile = (imageUrl) => {
    if (imageUrl) {
      setProfileImg(imageUrl); // Set the custom profile picture URL if provided
    }
    setIsModalOpen(true); // Set the state to open the modal for updating the profile
  };
  
  return (
    <Stack spacing={5}>
      <Box boxShadow={"md"} m={"auto"} mt={"4%"} w={"500px"} borderRadius={10}>
        <Box w={"100%"} borderRadius={10}>
          <Box borderRadius="full" overflow="hidden" w="300px" h="300px" m="auto">
            <Image w={"300%"} h="100%" objectFit="cover" src={profileImg} alt="Profile Picture"/>
          </Box>
        </Box>
        <Box p={2}>
          <Text>Username: mor_2314</Text>
          <Text>Email: useremai@123</Text>
          <Button variant="outline" colorScheme="teal" onClick={() => handleUpdateProfile(prompt('Enter image URL:', profileImg))}>Update Profile</Button>
        </Box>
      </Box>
      {/* <Box>
        <ModalBox isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> 
      </Box> */}
    </Stack>
  );
}

export default Profile;
