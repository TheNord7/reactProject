import Authors from "../Authors";
import store from "../store";
import { addMessage, ADD_MESSSAGE } from "../store/messages/actions";

const middleware = state => next => action => {
    if (action.type === ADD_MESSSAGE && action.payload.message.author !== Authors.bot) {
        const newMessage = { text: `Привет!`, author: Authors.bot };
        setTimeout(() => store.dispatch(addMessage(action.payload.chatId, newMessage)),
            2000
        );
    }

    return next(action);
}

export default middleware;