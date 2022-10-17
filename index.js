

// tree 树
// func 判断相等的条件
// path 存放父节点的数组
function treeFindPath (tree, func, path = []) {
  if (!tree) return []
  for (const data of tree) {
    path.push(data.name) // 递归过程中push当前节点
    if (func(data)) return path // 相等返回父节点数组
    // 子节点递归查找
    if (data.children) {
      const findChildren = treeFindPath(data.children, func, path)
      if (findChildren.length) return findChildren
    }
    // 没有找到子节点则删除当前节点
    path.pop()
  }
  return []
}

// 根据子节点查找所有父节点
function treeFindPath (tree, func, path = []) {
  if (!tree) return []
  for (const data of tree) {
    path.push(data.name)
    if (func(data)) return path
    if (data.children) {
      const findChildren = treeFindPath(data.children, func, path)
      if (findChildren.length) return findChildren
    }
    path.pop()
  }
  return []
}