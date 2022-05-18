import Authors from "../../Authors";
export const ADD_MESSSAGE = 'MESSAGE::ADD_MESSAGE';
export const ADD_MESSAGE_WITH_SAGA = 'MESSAGE::ADD_MESSAGE_WITH_SAGA';
export const UPDATE_MESSAGES = 'MESSAGE::UPDATE_MESSAGES';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSSAGE,
    payload: { chatId, message }
});

export const onAddMessageWithSaga = (chatId, message) => ({
    type: ADD_MESSAGE_WITH_SAGA,
    payload: { chatId, message }
});

export const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));

    if (message.author !== Authors.bot) {
        const botMessage = { text: `Привет, я из танкха`, author: Authors.bot };
        setTimeout(() => dispatch(addMessage(chatId, botMessage)), 1500);
    }

};

export const updateMessages = (chatId, messages) => ({
    type: UPDATE_MESSAGES,
    chatId,
    messages
});