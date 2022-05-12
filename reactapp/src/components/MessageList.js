import { useParams } from "react-router-dom";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { AccountCircle, Android } from '@mui/icons-material';
import Authors from '../Authors';
import { useDispatch, useSelector } from 'react-redux';
import { getMessagesByChatIdWithFB } from "../middlewares/middleware";
import { useEffect } from "react";



const MessageList = () => {

    const allMessages = useSelector(state => state.messages.messageList)
    let { chatId } = useParams();
    const { name } = useSelector((state) => state.profile);
    const messages = allMessages[chatId];
    const dispatch = useDispatch();

    const checkAuthor = (author) => {
        return author === Authors.bot;
    }

    useEffect(() => {
        dispatch(getMessagesByChatIdWithFB(chatId));
    }, [chatId])

    return <>
        {messages?.map((el) =>
        (
            <List sx={{ width: '100%', maxWidth: 360, border: '3px solid white', borderRadius: '40px', marginBottom: '10px' }} key={el.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            {checkAuthor(el.author) ? <Android /> : <AccountCircle />}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={el.text} secondary={checkAuthor(el.author) ? Authors.bot : name} />
                </ListItem>
            </List>
        ))}
    </>
}

export default MessageList
