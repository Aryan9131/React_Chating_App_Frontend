import React, { useContext, useState } from 'react';
import { userContext } from '../Context/userContext';
import { Box } from '@mui/material';
import { Profile } from './Profile'; //Header to show user details like name
import { Messages } from './Messages'; // All Conversation Messages List
import { ChatFooter } from './ChatFooter'; // Input field for sending messages
export const ChatingDetails = () => {
    const { clickedConversation, setClickedConversation } = useContext(userContext);
  return (
    <Box sx={{display:"flex", flexDirection:"column", width:"70%"}}>
        <Profile/>
        <Messages/>
        <ChatFooter/>
    </Box>
  )
}
