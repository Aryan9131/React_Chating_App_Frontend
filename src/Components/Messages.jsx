import React, { useContext, useState } from 'react';
import { userContext} from '../Context/userContext';
import { List, ListItem } from '@mui/material';

export const Messages = () => {
    const {clickedConversation} = useContext(userContext); // Current Conversation

  return (
    // List of all the conversation messages
    <List sx={{flex:1, overflowY:"auto"}} >
            {clickedConversation.messages.map(message => (
                <ListItem key={message.id}
                  sx={{display:"flex", flexDirection:"row", justifyContent:message.isSent?"end": "start"}}
                >
                    <span style={{backgroundColor:"whitesmoke", color:"grey", borderRadius:"8px"}}>
                        <span style={{ padding:"10px 8px"}}>{message.data}</span>
                        <span style={{fontSize:"10px", display:"flex", justifyContent:"flex-end",padding:"1px 5px"}}>{message.time}</span>
                    </span>
                </ListItem>
            ))}
        </List>
  )
}
