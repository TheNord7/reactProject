import { async } from "@firebase/util";
import Authors from "../Authors";
import store from "../store";
import { addMessage, ADD_MESSSAGE } from "../store/messages/actions";
import { getDatabase, ref, push, set, onValue, remove, update } from 'firebase/database';
import { chatListUpdate } from "../store/chats/actions";
import firebaseConfig from '../services/firebaseConfig';
import { updateMessages } from "../store/messages/actions";

const middleware = state => next => action => {
    if (action.type === ADD_MESSSAGE && action.payload.message.author !== Authors.bot) {
        const newMessage = { text: `Привет!`, author: Authors.bot };
        setTimeout(() => store.dispatch(addMessage(action.payload.chatId, newMessage)),
            2000
        );
    }

    return next(action);
}

export const initTrackerWithFB = () => async (dispatch) => {
    const db = getDatabase(firebaseConfig);
    const chatRef = ref(db, '/chats');
    const newChatRef = push(chatRef);
    onValue(chatRef, (snapShot) => {
        const data = snapShot.val();
        const chatIds = Object.keys(data);
        const chatArr = chatIds.map(item => ({ id: item, name: data[item].name }));
        dispatch(chatListUpdate(chatArr));
    });
};

export const addChatWithFB = (name) => async () => {
    const db = getDatabase(firebaseConfig);
    const chatRef = ref(db, '/chats');
    const newChatRef = push(chatRef);
    set(newChatRef, { name: name }).then(res => {
        console.log('chat added', res);
    });
};

export const deleteChatWithFB = (id) => async () => {
    const db = getDatabase(firebaseConfig);
    const chatRef = ref(db, `/chats/${id}`);
    const messagesRef = ref(db, `messages/${id}`);
    remove(chatRef).then((res) => {
        console.log('chat removed', res);

    });
    remove(messagesRef).then((res) => {
        console.log('messages deleted', res);
    });
};

export const addMessageWithFB = (chatId, message) => async () => {
    const db = getDatabase(firebaseConfig);
    const messagesRef = ref(db, `messages/${chatId}`);
    const newMessageRef = push(messagesRef);
    set(newMessageRef, message).then((res) => {
        console.log('message added', res);
    })

};

export const getMessagesByChatIdWithFB = (chatId) => async (dispatch) => {
    const db = getDatabase(firebaseConfig);
    const msgRef = ref(db, `messages/${chatId}`);
    onValue(msgRef, (snapShot) => {
        const data = snapShot.val();
        const msg = data && Object.values(data);
        if (msg?.length > 0) {
            dispatch(updateMessages(chatId, msg))
        }
    })

}

export default middleware;