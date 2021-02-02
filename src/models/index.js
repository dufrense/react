import request from '../utils/request.js';

let index = {
    namespace: 'index',
    state: { 
        wholeName: "007",
        wordList: ["goods", "morning", "class"],
        gameState: 0,
        score: 0,
        word: "aa",
        timeLeft: 0
    },
    effects: {
        // 异步action
        *changeName({ }, { select, put, call }) {
            console.log("进入到 saga里面的 changeName了");
            let res = yield call(request('nameBack.json'));
            console.log("saga 获取到的数据为：", res);
            yield put({ type: 'changeNameReducer', payload: { wholeName: res.data } });
        }
    },
    reducers: {
        changeNameReducer(state, { payload }) {
            return {  // 返回一个新值,值不可变性
                wholeName: payload.wholeName
            }
        },
        setMyState(state, { payload }){
            return Object.assign(state, payload);
        }
    }
}

export default index;