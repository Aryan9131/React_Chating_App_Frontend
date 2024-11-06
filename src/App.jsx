import React, { useContext, useState } from 'react';
import { userContext} from './Context/userContext';
import {Box} from '@mui/material'
import './App.css'
import { Conversations } from './Components/Conversations'
import { ChatingDetails } from './Components/ChatingDetails';

function App() {
  const {clickedConversation} = useContext(userContext);
  return (
      <Box sx={{width:"100vw", height:"100vh", display:"flex", flexDirection:"row"}}>
          <Conversations/>
          {
            clickedConversation
            ?
            <ChatingDetails/>
            :
            <Box sx={{width:"70%",display:"flex", justifyContent:"center", alignContent:"center", alignItems:"center"}}>
              <h1>Chat with Friends </h1>
            </Box>
          }
       </Box>
  )
}

export default App
