import React, { useContext } from 'react'; // Import necessary hooks and components
import { userContext } from './Context/userContext'; // Import user context to access global state
import { Box } from '@mui/material'; // Import Box component for layout
import { Conversations } from './Components/Conversations'; // Import conversations list component
import { ChatingDetails } from './Components/ChatingDetails'; // Import chat details component
import { ToastContainer } from 'react-toastify'; // Import ToastContainer for displaying notifications
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS for styling notifications

function App() {
  const { clickedConversation } = useContext(userContext); // Access 'clickedConversation' from context

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row"
      }}
    >
      {/* Display the list of conversations on the left side */}
      <Conversations />

      {/* Conditionally render chat details or a prompt message based on 'clickedConversation' */}
      {clickedConversation ? (
        <ChatingDetails />
      ) : (
        <Box
          sx={{
            width: "70%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center"
          }}
        >
          <h1>Chat with Friends</h1>
        </Box>
      )}

      {/* ToastContainer for displaying notifications */}
      <ToastContainer />
    </Box>
  );
}

export default App;
