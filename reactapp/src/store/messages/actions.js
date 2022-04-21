export const ADD_MESSSAGE = 'MESSAGE::ADD_MESSAGE';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSSAGE,
    payload: { chatId, message }
});