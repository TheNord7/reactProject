import React, { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Dialog, DialogTitle, IconButton, TextField } from "@mui/material";
import { addChat } from "../store/chats/actions";
import { useParams } from "react-router-dom";
import { addChatWithFB, deleteChatWithFB, initTrackerWithFB } from "../middlewares/middleware";




const ChatList = () => {

    const chats = useSelector(state => state.chats.chatList);
    const [visible, setvisible] = useState(false);
    const dispatch = useDispatch();
    const { chatId } = useParams();

    const handleChatName = (event) => {
        setChatName(event.target.value);
    };

    const handleClose = () => {
        setvisible(false)
    }

    const [chatName, setChatName] = useState(' ');


    const handleAdd = () => {
        setvisible(true);
    };

    const handleSave = () => {
        dispatch(addChatWithFB(chatName));
        handleClose();
    };

    const deleteChat = (id) => {
        dispatch(deleteChatWithFB(id));
    };

    useEffect(() => {
        dispatch(initTrackerWithFB());
    }, [chatId])


    return (
        <div>
            <List>
                {chats?.length > 0 ? (chats.map((chat) => (
                    <Link to={`/chats/${chat.id}`} key={chat.id}>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem key={chat.id} disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={`${chat.name}`}
                                            src={`/static/images/avatar/${chat.name}.jpg`}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText primary={chat.name} />
                                </ListItemButton>
                            </ListItem>
                            <Button onClick={() => deleteChat(chat.id)}>X</Button>
                            <Divider variant="inset" component="li" />
                        </List>
                    </Link>
                ))) : (<div>No chats</div>)
                }
            </List>
            <Button onClick={handleAdd}>Add Chat</Button>
            <Dialog open={visible} onClose={handleClose}>
                <DialogTitle>Create Chat</DialogTitle>
                <TextField placeholder="Chat_name" value={chatName} onChange={handleChatName} />
                <Button onClick={handleSave}>Save</Button>
            </Dialog>
        </div>
    )
};

export default ChatList;
