import { ADD_MESSSAGE } from "./actions";

const initialState = {
    messageList: {}
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSSAGE:
            const { chatId, message } = action.payload;
            const oldMessages = state.messageList[chatId] || [];
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [chatId]: [
                        ...oldMessages,
                        {
                            ...message,
                            id: `${chatId}${oldMessages.length}`
                        }
                    ]
                }
            };
        default:
            return state;
    }
};

export default messagesReducer