import React, { useState } from 'react'
import { createContext } from "react";
import data from '../userApi/conversationsData.json'
export const userContext=createContext(undefined);

export const UserContextProvider = (props) => {
    const [conversations,setConversations]=useState(data)
    const [clickedConversation, setClickedConversation]=useState(undefined)
  return (
       <userContext.Provider value={{conversations,setConversations,clickedConversation, setClickedConversation}}>
          {props.children}
       </userContext.Provider>
  )
}
