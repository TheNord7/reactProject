import reducer from '../store/profile/reducer'

describe('profileReducer test', () => {

    it('SET_NAME', () => {
        const action = {
            type: SET_NAME,
        }
    });

    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        name: action.payload
    })
});