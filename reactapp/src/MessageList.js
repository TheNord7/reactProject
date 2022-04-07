// import * as React from 'react';
import React, { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemButton from "@mui/material/ListItemButton";

const MessageList = () => {

    const [chat, setChat] = useState([
        { id: 1, name: "Jora" },
    ]);

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {chat.map((item) => (
                <ListItem key={item.id} disablePadding>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar
                                alt={`${item.name}`}
                                src={`/static/images/avatar/${item.id}.jpg`}
                            />
                        </ListItemAvatar>
                        <ListItemText primary={item.name} />
                    </ListItemButton>
                </ListItem>
            ))}
            <Divider variant="inset" component="li" />
        </List>
    );
}

export default MessageList
