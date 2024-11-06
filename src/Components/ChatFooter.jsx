import React, { useContext, useState } from 'react';
import { userContext } from '../Context/userContext';
import { Box, IconButton, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const ChatFooter = () => {
    const [msgData, setMsgData] = useState("");
    const { clickedConversation, setClickedConversation, setConversations } = useContext(userContext);

    const handleMessageSent = () => {
        const newMsg = {
            id: `${clickedConversation.messages.length + 1}`,
            isSent: true,
            data: msgData,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }),
        };

        // Create a new updated conversation object with the new message
        const updatedConversation = {
            ...clickedConversation,
            messages: [...clickedConversation.messages, newMsg],
        };

        // Update the `clickedConversation` state with the new message
        setClickedConversation(updatedConversation);

        // Update the `conversations` list in context
        setConversations((conversations) =>
            conversations.map((conversation) =>
                conversation.id === updatedConversation.id ? updatedConversation : conversation
            )
        );

        // Clear the message input field
        setMsgData("");
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", backgroundColor: "wheat" }}>
            <TextField
                placeholder="Type Message..."
                value={msgData}
                onChange={(e) => setMsgData(e.target.value)}
                sx={{ width: "100%", color: "white" }}
            />
            <IconButton onClick={handleMessageSent} sx={{color:"green"}}><SendIcon/></IconButton>
        </Box>
    );
};