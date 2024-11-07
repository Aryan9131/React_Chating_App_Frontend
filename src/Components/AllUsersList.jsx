import * as React from 'react';
import { Button, Divider, IconButton, List, ListItem } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useContext, useState } from 'react';
import { userContext } from '../Context/userContext';
import users from '../userApi/users.json';
import StartIcon from '@mui/icons-material/Start';
import AddIcon from '@mui/icons-material/Add';
import { toast } from 'react-toastify';

export default function AllUsersListDialog() {
  const [open, setOpen] = React.useState(false); // State to manage dialog visibility
  const theme = useTheme(); // Access theme for responsive design
  const fullScreen = useMediaQuery(theme.breakpoints.down('md')); // Determine if dialog should be fullscreen on smaller screens
  const [allUsers, setAllUsers] = useState(users); // Initialize list of all users from JSON file
  const { clickedConversation, setClickedConversation } = useContext(userContext); // Access and update selected conversation
  const { conversations, setConversations } = useContext(userContext); // Access and manage list of conversations

  // Open dialog box
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close dialog box
  const handleClose = () => {
    setOpen(false);
  };

  // Start or switch to a conversation with a selected user
  const handleStartConversation = (userName) => {
    try {
      // Check if a conversation with the selected user already exists
      const presentConversation = conversations.find(conver => conver.participants.user2 === userName);
      if (presentConversation) {
        // Set the existing conversation as active
        setClickedConversation(presentConversation);
      } else {
        // Create a new conversation if none exists
        const newConversation = {
          id: `${conversations.length + 1}`, // Assign new conversation ID
          participants: {
            user1: "Aryan",
            user2: userName
          },
          messages: [] // Initialize empty message array
        };
        // Update conversations list and set new conversation as active
        setConversations(prevConversations => [...prevConversations, newConversation]);
        setClickedConversation(newConversation);
        toast.success("User Selected!"); // Display success toast
      }
      handleClose(); // Close dialog after selection
    } catch (error) {
      toast.error("Error while selecting user for conversation!"); // Display error toast on failure
    }
  };

  return (
    <React.Fragment>
      {/* Button to open dialog */}
      <IconButton onClick={handleClickOpen}><AddIcon /></IconButton>
      
      {/* Dialog displaying the list of users */}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="allUsers">
          {"Add User to Conversation"}
        </DialogTitle>
        <DialogContent>
          {/* List of all available users */}
          <List>
            {allUsers.map((user, index) => (
              <ListItem
                key={index}
                onClick={() => handleStartConversation(user.userName)}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid grey",
                  '&:hover': {
                    backgroundColor: "lightgreen"
                  }
                }}
              >
                <span>{user.userName}</span>
                <IconButton sx={{ color: "green" }}><StartIcon /></IconButton>
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          {/* Button to close the dialog */}
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
