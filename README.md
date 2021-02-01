


## 调试Store ##
  	调试时能在浏览器中看到Store数据，仅需 createStore时，在 reducer 后 介入是否存在 浏览器redux-dev-tools这个插件



## 引入dva

i dva, history

let app = new dva({history: createBrowserHistory() });

app.router(router); 

app.start("#root")

let fn 此 Router 文件夹为 routers



## store简单操作

store 下index.js导出 constants中变量

subscribe监听state改变，并通过 setState

reducer 返回做手术后的state，利用 JSON.stringify、parse等

**redux-thunk**  EXTENSION__  ->  COMPOSE__

## react-redux

(dispatch) => ({}) 隔层作用，connect 用的这两个都是返回函数

props 无状态组件，下面直接用 props，如果还是 Component，在 connect 连接后，要用 this.props

## saga

connect 引源于 dva，原理与 redux-thunk 相同

state 与 type 要注意加 namespace，effect 与 reducer 对应的函数不要重名

model(modelIndex)

## 基本

React 两种常见类型对象 createElement Componet 



