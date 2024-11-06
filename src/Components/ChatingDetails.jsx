import React, { useContext, useState } from 'react';
import { userContext } from '../Context/userContext';
import { Box } from '@mui/material';
import { Profile } from './Profile';
import { Messages } from './Messages';
import { ChatFooter } from './ChatFooter';
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
