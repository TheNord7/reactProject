import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/Chat';

const Message = ({ message }) => {


    return <>
        {message.map((el, index) =>
        (
            <List sx={{ width: '100%', maxWidth: 360, border: '3px solid white', borderRadius: '40px', marginBottom: '10px' }} key={index}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ChatIcon style={{ color: 'skyblue' }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={el.text} secondary={el.author} />
                </ListItem>
            </List>
        ))}
    </>



};
export default Message