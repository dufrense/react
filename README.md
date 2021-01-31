


## 调试Store ##
  	调试时能在浏览器中看到Store数据，仅需 createStore时，在 reducer 后 介入是否存在 浏览器redux-dev-tools这个插件



## 引入dva

i dva, history

let app = new dva({history: createBrowserHistory() });

app.router(router); 

app.start("#root")

let fn 此 Router 文件夹为 routers



