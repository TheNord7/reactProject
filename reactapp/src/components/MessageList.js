import { useParams } from "react-router-dom";


const MessageList = ({ chats }) => {

    let { chatId } = useParams();
    if (!chats[chatId]) return null;
    const messages = chats[chatId].message;
    return (
        <div>
            {messages.map((message, index) => (
                <div key={index}>
                    <p>{message.text}</p>
                    <p>{message.author}</p>
                </div>
            ))}
        </div>
    )
}

export default MessageList
