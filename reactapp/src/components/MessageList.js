import { useParams } from "react-router-dom";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { AccountCircle, Android } from '@mui/icons-material';
import Authors from '../Authors';
import { useSelector } from 'react-redux';



const MessageList = () => {

    const allMessages = useSelector(state => state.messages.messageList)
    let { chatId } = useParams();
    const { name } = useSelector((state) => state.profile);
    if (!allMessages[chatId]) return null;
    const messages = allMessages[chatId];

    const checkAuthor = (author) => {
        return author === Authors.bot;
    }
    return <>
        {messages.map((el) =>
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
