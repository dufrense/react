import * as constants from './constants';
import axios from 'axios';

const changeNameAction = () => {
    return (dispatch) => {
        axios.get('/nameBack.json').then(ret => {
            dispatch({ type: constants.CHANGE_NAME, data: ret.data })
            })
    }
};

export { changeNameAction };