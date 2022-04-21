
import { SET_NAME, TOGGLE_NAME } from './actions';

const initialState = {
    showName: true,
    name: 'Jora'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_NAME:
            return {
                ...state,
                showName: !state.showName
            };

        case SET_NAME:
            return {
                ...state,
                name: action.payload
            };

        default:
            return state;
    }
}

export default profileReducer;