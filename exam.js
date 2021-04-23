// 对URL进行参数解析，考虑代码健壮性
// 输入 http://taobao.com?foo=bar&abc=123#token=xyz 输出
// {
//   params: { 'foo': 'bar', 'abc': 123 },
//   hash: '#token=xyz'
// }
function parseURL (url) {
  let params = {}
  let hash = ''
  let searchString = ''
  const searchPos = url.indexOf('?')
  const hashPos = url.indexOf('#')
  if (searchPos > -1) {
    searchString = url.slice(
      searchPos + 1,
      hashPos > -1 ? hashPos : url.length
    )
    params = parseQuery(searchString)
  }
  if (hashPos > -1) {
    hash = url.slice(hashPos, url.length)
  }
  return {
    params,
    hash
  }
}
function parseQuery (search) {
  const query = {}
  if (search === '' || search === '?') return query
  const searchParams = search.split('&')
  for (let i=0; i<searchParams.length; i++) {
    let searchParam = searchParams[i]
    const [key, value] = searchParam.split('=')
    query[key] = decodeURIComponent(value)
  }
  return query
}