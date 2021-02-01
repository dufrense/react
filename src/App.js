import { store, constants, actionCreators } from './store';
import { Component } from 'react';
import { connect } from 'react-redux';

const App = (props) => {
  const { wholeName, changeName } = props;
  return (
    <div>
      {wholeName}
      <input placeholder="请输入要修改的名字" onBlur={changeName} />
    </div>
  );
}

export default connect
  (
    (state) => ({ wholeName: state.wholeName }),
    (dispatch) => ({
      changeName() {
        dispatch(actionCreators.changeNameAction());
      }
    })
  )(App);
