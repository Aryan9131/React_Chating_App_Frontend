import React from 'react'
import { Box , Typography} from '@mui/material' // Import Box container
import AllUsersListDialog from './AllUsersList' // all users list Dialog
export const ChatHeader = () => {
  return (
    <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between",alignItems:"center", height:"40px",width:"98%"}}>
        <Typography variant="h6" sx={{backgroundColor:"grey", padding:"1px 5px", borderRadius:"5px"}}>AllChats :</Typography>
         
         {/* List of all the Users available  */}
        <AllUsersListDialog/>
    </Box>
  )
}
