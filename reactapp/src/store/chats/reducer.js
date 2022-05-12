import { ADD_CHAT, CHATS_UPDATE } from "./actions";

const initialState = {
    chatList: []
};


const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            const allMessages = state.chatList;
            return {
                ...allMessages,
                chatList: [
                    ...allMessages,
                    {
                        id: `id${state.chatList.length}`,
                        name: action.payload
                    }
                ]
            };

        case CHATS_UPDATE:
            return {
                ...state,
                chatList: action.chats
            }
        default:
            return state;
    }
};


export default chatsReducer