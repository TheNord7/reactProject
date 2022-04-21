import { ADD_CHAT } from "./actions";

const initialState = {
    chatList: []
};

// const chatList = [
//     {
//         id: 'string',
//         name: 'string'
//     }
// ]

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state,
                    {
                        id: `id${state.chatList.length}`,
                        name: action.payload.name
                    }
                ]
            };
        default:
            return state;
    }
};


export default chatsReducer