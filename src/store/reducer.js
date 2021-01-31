import * as constants from './constants';

const defaultState = {
    wholeName: 'wuwenjing'
}

const reducer = (state = defaultState, action) => {
    if(action.type === constants.CHANGE_NAME){

        // 加工原 state
        const newState = JSON.parse(JSON.stringify(state));
        newState.wholeName = action.data;
        return newState;
    }

    return state;
}

export default reducer;

