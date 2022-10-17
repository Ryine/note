const util = {}
getHttpString = (method, url, title, objName) => {
  if (method === 'GET') {
    return `
    // ${title} ${method}
    export function ${url} (form) {
      return Vue.http.${method.toLowerCase()}(Utils.paths.${objName}.${url}, { params: form })
    }`
  } else if (method === 'POST') {
    return `
    // ${title} ${method}
    export function ${url} (form) {
      return Vue.http.${method.toLowerCase()}(Utils.paths.${objName}.${url}, form, { emulateJSON: false }, {headers: { 'ContentType': 'application/json' }})
    }`
  }
}
let httpString = ''
let utilString = ''
// 标题
let title = ''
// 方法
let url = ''
util.data.forEach(subItem => {
  // item.data.forEach(subItem => {
    title = subItem.name.replace(/\d./, '')
    url = subItem.url.match(/([^/]*)$/)[1]
    utilString += `// ${title}\n${url}: '${subItem.url}',\n`
    httpString += getHttpString(subItem.method, url, title, 'refund')
  // })
})
console.log(httpString)
console.log(utilString)