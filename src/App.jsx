import React, { useContext, useState } from 'react';
import { userContext} from './Context/userContext';
import {Box} from '@mui/material'
import { Conversations } from './Components/Conversations'
import { ChatingDetails } from './Components/ChatingDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <ToastContainer />
       </Box>
  )
}

export default App
