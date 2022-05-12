
import MessageList from '../components/MessageList';
import ChatList from '../components/ChatList';
import '../App.scss';
import SendField from '../components/SendField';




const Chats = () => {



    return <div className='wrap'>
        <ChatList />
        <div>
            <MessageList />
            <SendField />
        </div>

    </div>
};

export default Chats