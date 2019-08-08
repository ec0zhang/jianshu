This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## V 0.0.1
`v 0.0.1` 目前只实现了页面导航栏（header）部分的基本编写，采用
 `react-redux` 的方式管理、使用数据，把 store 数据放在组件最外层，
 使得在所有组件中都可以访问得到 store
 
 采用 `axios` 发送 ajax 请求，并且把异步代码使用 `redux-thunk` 实现
 （ 后面可能还会改写成redux-saga ），
 
 使用 `createGlobalStyle` 组件对页面基础进行统一设置。
 
 使用 `CSSTransition` 制作的搜索框的动画。
 
 ## V 0.0.2
 `v0.0.2` 这里实现了首页的基本编写，对首页进行组件拆分，然后按照现在基本布局
 样式，然后实现逻辑功能完成了首页的基本编写。
 
 在路由部分使用`react-router-dom`来实现页面根据url进行变化。
 
 使用了`react-redux`来处理数据的逻辑部分，小动画也基本完成， 
 