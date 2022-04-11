import React, { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";
import { Message } from "@mui/icons-material";


const ChatList = ({ chats }) => {
    // const obdjdj = Object.keys(chats).map(element => (
    //     console.log(element)
    // ));
    // console.log(chats);

    return (
        <div>
            {Object.keys(chats).map((element, index) => (
                <Link to={`/chats/${element}`} key={index}>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={`${element.name}`}
                                        src={`/static/images/avatar/${element.name}.jpg`}
                                    />
                                </ListItemAvatar>
                                <ListItemText primary={chats[element].name} />
                            </ListItemButton>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                </Link>
            ))
            }
        </div >

    )
}

export default ChatList
