import { useEffect, useRef, useState } from 'react';
import { Button } from '@mui/material';
import { Send } from '@mui/icons-material';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageWithThunk, onAddMessageWithSaga } from '../store/messages/actions';

const SendField = () => {
    let { chatId } = useParams();
    const [value, setValue] = useState('');
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const author = useSelector(state => state.profile.name);

    const changeText = (event) => {
        setValue(event.target.value)
    }

    const addText = (event) => {
        event.preventDefault();
        const newMessage = { text: value, author };
        dispatch(addMessageWithThunk(chatId, newMessage));
        setValue('')
        inputRef.current?.focus();
    }

    useEffect(() => {
        inputRef.current?.focus();

    }, [])

    return (
        <div className='chatWrap'>

            <form>

                <Input
                    style={{ marginRight: '10px' }}
                    inputRef={inputRef}
                    value={value} onChange={changeText}
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start" color="#fff">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />

                <Button style={{ color: 'white' }} type='submit' variant="contained" disableElevation onClick={addText}>
                    Send
                    <Send style={{ marginLeft: '10px' }} />
                </Button>

            </form>
        </div>
    )
}

export default SendField