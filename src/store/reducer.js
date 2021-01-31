const defaultState = {
    wholeName: 'wuwenjing'
}

const reducer = (state = defaultState, action) => {
    if(action.type === 'changeName'){
        return {
            wholeName: 'wuwenjing1'
        }
    }

    return state;
}

export default reducer;

