
import MessageList from '../components/MessageList';
import ChatList from '../components/ChatList';
import '../App.scss';
import SendField from '../components/SendField';




const Chats = ({ chats }) => {



    return <div className='wrap'>
        <ChatList chats={chats} />
        <SendField />
        <MessageList chats={chats} />

    </div>
};

export default Chats