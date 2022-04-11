import { useEffect, useRef, useState } from 'react';
import { Button } from '@mui/material';
import { Send } from '@mui/icons-material';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Message from '../components/Message';
import Authors from '../Authors';
import { useParams } from 'react-router-dom';

const SendField = () => {

    const [messageList, setmessageList] = useState([]);
    const [value, setValue] = useState('');
    const inputRef = useRef(null);



    const changeText = (event) => {
        setValue(event.target.value)
    }

    const addText = (event) => {
        event.preventDefault();
        setmessageList([...messageList, { text: value, author: Authors.user }])
        setValue('')
        inputRef.current?.focus();
    }

    useEffect(() => {
        inputRef.current?.focus();

    }, [])

    useEffect(() => {
        if (messageList.length > 0 && messageList[messageList.length - 1].author !== Authors.bot) {
            const name = Authors.user;
            setTimeout(() => {
                setmessageList([...messageList, { text: `Привет, ${name}`, author: Authors.bot }])
            }, 1500)
        }
    }, [messageList])

    const sendForm = (event) => {
        event.preventDefault()
    }

    return (
        <div className='chatWrap'>

            <form onSubmit={sendForm}>

                <span>Чат:</span><br /><br />

                <Message message={messageList} />

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