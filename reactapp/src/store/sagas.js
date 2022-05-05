import { delay, put, takeLatest } from 'redux-saga/effects'
import Authors from '../Authors';
import { ADD_MESSAGE_WITH_SAGA, addMessage } from './messages/actions';

function* onAddMessageWithSaga(action) {
    yield put(addMessage(action.payload.chatId, action.payload.message))
    if (action.payload.message.author !== Authors.bot) {
        const botMessage = { text: `Привет, я из танкха`, author: Authors.bot };
        yield delay(2000);
        yield put(addMessage(action.payload.chatId, botMessage));
    }
}

function* mySaga() {
    yield takeLatest(ADD_MESSAGE_WITH_SAGA, onAddMessageWithSaga);
}

export default mySaga;