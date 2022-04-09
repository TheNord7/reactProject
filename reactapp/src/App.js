
import { useEffect, useRef, useState } from 'react';
import './App.scss';
import Message from './Message';
import Authors from './authors';
import { Button } from '@mui/material';
import { Send } from '@mui/icons-material';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MessageList from './MessageList';



function App(props) {

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
    <div className="App">
      <header className="App-header">

        <div>

          <div className='chatWrap'>
            <MessageList />
            <form onSubmit={sendForm}>
              <span>Чат:</span><br /><br />
              {messageList.map((el, index) => (<Message text={el} file={index} />))}
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

        </div>
      </header>
    </div >
  );
}

export default App;
