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
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [allUsers, setAllUSers] = useState(users)
  const { clickedConversation, setClickedConversation } = useContext(userContext);
  const { conversations, setConversations } = useContext(userContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStartConversation = (userName) => {
    try {
      const presentConversation = conversations.find(conver => conver.participants.user2 === userName);
      if (presentConversation) {
        setClickedConversation(presentConversation)
      } else {
        const newConversation = {
          id: `${conversations.length + 1}`,
          participants: {
            user1: "Aryan",
            user2: userName
          },
          messages: []
        }
        setConversations(prevConversations => [...prevConversations, newConversation]);
        setClickedConversation(newConversation);
        toast.success("User Selected !")
      }
      handleClose();
    } catch (error) {
        toast.error("Error while Selecting user for Conversation !")
    }
  }

  return (
    <React.Fragment>
      <IconButton onClick={handleClickOpen}><AddIcon /></IconButton>
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
          <List >
            {
              allUsers.map((user, index) => {
                return (
                  <ListItem
                    key={index}
                    onClick={() => handleStartConversation(user.userName)}
                    sx={{
                      display: "flex", justifyContent: "space-between",
                      borderBottom: "1px solid grey",
                      '&:hover': {
                        backgroundColor: "lightgreen"
                      }
                    }}>
                    <span>{user.userName}</span>
                    <IconButton sx={{ color: "green" }}><StartIcon /></IconButton>
                  </ListItem>
                )
              })
            }
          </List>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
