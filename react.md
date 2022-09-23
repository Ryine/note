## useState实现
```
let memoizedState = [];
let cursor = 0;
function useState(initialValue) {
  // 初次调用时，传入的初始值作为 state，后续使用闭包中保存的 state
  let state = memoizedState[cursor] ?? initialValue;
  // 对游标进行闭包缓存，使得 setState 调用时，操作正确的对应状态
  const _cursor = cursor;
  const setState = (newValue) => (memoizedState[_cursor] = newValue);
  // 游标自增，为接下来调用的 hook 使用时，引用 memoizedState 中的新位置
  cursor += 1;
  return [state, setState];
}
```
let arr = new Array(10).fill(new Array(10).fill('').map((item, index) => index))
console.log(arr)
for (let l = 1; l < 10; l++) {
  for (let i = 0; i < 10 - l; i++) {
    let j = i + l
    console.log(arr[i][j], i, j)
  }
  console.log('----一行结束------')
}