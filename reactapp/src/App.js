
import { useEffect, useState } from 'react';
import './App.scss';
import Message from './Message';
import Authors from './authors';


function App(props) {
  const [messageList, setmessageList] = useState([]);
  const [value, setValue] = useState('');

  const changeText = (event) => {
    setValue(event.target.value)
  }

  const addText = () => {
    setmessageList([...messageList, { text: value, author: Authors.user }])
  }

  useEffect(() => {
    if (messageList.length > 0 && messageList[messageList.length - 1].author !== Authors.bot) {
      const name = Authors.user;
      setTimeout(() => {
        setmessageList([...messageList, { text: `Привет, ${name}`, author: Authors.bot }])
      }, 1500)
    }
  }, [messageList])

  return (
    <div className="App">
      <header className="App-header">
        <span>Чат:</span><br />
        {messageList.map(el => (<Message text={el} />))}
        <div>
          <input value={value} onChange={changeText} />
          <button onClick={addText}>Отправить</button>
        </div>
      </header>
    </div >
  );
}

export default App;
