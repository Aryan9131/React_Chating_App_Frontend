import React, { useContext, useState } from 'react';
import { userContext } from '../Context/userContext';
import { Avatar, List, ListItem } from '@mui/material';

export const ConversationList = ({ conversations }) => {
    const { clickedConversation, setClickedConversation } = useContext(userContext);

    return (
        <List
            sx={{
                width: "98%",
                overflowY: "auto",
                '&::-webkit-scrollbar': {
                    display: "none"  // Hide scrollbar for WebKit browsers
                },
                scrollbarWidth: "none"  // Hide scrollbar for Firefox
            }}
        >            {conversations.map(conversation => (
            <ListItem key={conversation.id}
                onClick={() => setClickedConversation(conversation)}
                sx={{
                    minHeight: "75px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: 'space-between',
                    borderRadius: "10px", padding: "8px 5px",
                    marginBottom: '2px', color: "black", borderBottom: '.5px solid black',
                    '&:hover': { backgroundColor: clickedConversation?.id == conversation.id ? 'lightGreen' : 'lightgrey' },
                    backgroundColor: clickedConversation?.id == conversation.id ? 'lightGreen' : 'whitesmoke'
                }}>
                <span style={{ width: "98%", display: "flex", justifyContent: "space-between" }}>
                    <span style={{ display: "flex", alignItems: "center", fontSize: "20px", fontWeight: "bold" }}> <Avatar src={conversation.avatar} sx={{ marginRight: "8px" }} />   {conversation.participants.user2}</span>
                    <span> {conversation.messages.length > 0 ? conversation.messages[conversation.messages.length - 1].time : null}</span>
                </span>
                <span style={{ paddingLeft: "50px" }}>
                    {conversation.messages.length > 0 ? conversation.messages[conversation.messages.length - 1].data : null}
                </span>
            </ListItem>
        ))}
        </List>
    );
};
