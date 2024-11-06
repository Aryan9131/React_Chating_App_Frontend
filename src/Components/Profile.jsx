import React, { useContext, useState } from 'react';
import { userContext} from '../Context/userContext';
import { Box, Avatar, Typography } from '@mui/material';
export const Profile = () => {
    const {clickedConversation} = useContext(userContext);

  return (
       <Box sx={{display:"flex", flexDirection:"row",alignItems:"center", backgroundColor:"lightGreen", padding:"10px"}}>
            <Avatar alt="Remy Sharp" src={clickedConversation.avatar ? clickedConversation.avatar :"R"} sx={{margin:"0px 10px"}} />
            <Typography variant='h6'>{clickedConversation.participants?.user2}</Typography>
       </Box>
   )
}