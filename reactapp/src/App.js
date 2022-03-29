
import './App.scss';
import Message from './Message';
const message = "Some text";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        'Hello', {props.name}
        <Message text={message} />
      </header>
    </div>
  );
}

export default App;
