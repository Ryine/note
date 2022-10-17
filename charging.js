const util = {}
getHttpString = (method, url, title, objName) => {
  if (method === 'GET') {
    return `
    /** ${title} ${method} */
    export function ${url} (params?: unknown) {
      return http({ method: '${method.toLowerCase()}', url: ${objName}.${url}, params })
    }`
  } else if (method === 'POST') {
    return `
    /** ${title} ${method} */
    export function ${url} (params?: unknown) {
      return http({ method: '${method.toLowerCase()}', url: ${objName}.${url}, data: params })
    }`
  }
}
console.log(typeof util.data)
let httpString = ''
let utilString = ''
// 标题
let title = ''
// 方法
let url = ''
util.data.forEach(subItem => {
  // item.data.forEach(subItem => {
    if (!subItem.url) return
    title = subItem.name.replace(/\d、/, '')
    url = subItem.url.match(/([^/]*)$/)[1]
    utilString += `// ${title}\n${url}: '${subItem.url}',\n`
    httpString += getHttpString(subItem.method, url, title, 'refund')
  // })
})
console.log(utilString)
console.log(httpString)