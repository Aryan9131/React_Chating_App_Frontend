import React, { useContext, useState } from 'react';
import { userContext } from '../Context/userContext'; // import context for states
import { SearchBar } from './SearchBar';  // searchBar to search based on name
import { ConversationList } from './ConversationList'; // List of all conversations
import { Box } from '@mui/material'; //Container
import { ChatHeader } from './ChatHeader'; // Shows the AllChat Icon and Add(+) icon for users dialog
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
