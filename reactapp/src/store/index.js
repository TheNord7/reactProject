
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import chatsReducer from './chats/reducer';
import messagesReducer from './messages/reducer';
import profileReducer from './profile/reducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage
}



const reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    chats: chatsReducer

});

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)));


const persistor = persistStore(store);


export default persistor;

