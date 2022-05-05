import { ADD_CHAT } from "./actions";

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
        default:
            return state;
    }
};


export default chatsReducer