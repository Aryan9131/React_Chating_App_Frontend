import React, { useContext, useState } from 'react';
import { userContext } from '../Context/userContext';
import { SearchBar } from './SearchBar';
import { ConversationList } from './ConversationList';
import { Box } from '@mui/material';
import { ChatHeader } from './ChatHeader';
export const Conversations = () => {
    const {conversations} = useContext(userContext);
    const [searchTerm, setSearchTerm] = useState('');

    // Filter conversations based on the search term
    const filteredConversations = conversations.filter(conversation => {
        const contactName = conversation.participants.user2.toLowerCase();
        return contactName.includes(searchTerm.toLowerCase());
    });

    return (
        <Box sx={{display:"flex", flexDirection:"column",alignItems:"center", width:"30%", height:"100%", backgroundColor:"skyblue"}}>
            <ChatHeader/>
            <SearchBar setSearchTerm={setSearchTerm} />
            <ConversationList conversations={filteredConversations} />
        </Box>
    );
};
