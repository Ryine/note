## redux

- createStore 接受reducer，生成store
- Provider 将store注入context
- reducer 初始化state, 更新state
- connect 高阶组件, 从context取出store，并将store里的state和dispatch作为props传入组件
- mapDispatchToProps connect的参数，取出dispatch作为props
- mapStateToProps connect的参数，取出state作为props