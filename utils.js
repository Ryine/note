const util = {
  "name": "用户偏好设置",
  "flag": "SBDoc",
  "data": [
    {
      "param": [
        {
          "before": {
            "mode": 0,
            "code": ""
          },
          "after": {
            "mode": 0,
            "code": ""
          },
          "name": "参数",
          "id": "49bdde20-b052-4af5-9368-7026c8432419",
          "remark": "",
          "header": [
            {
              "name": "Content-Type",
              "value": "application/json",
              "remark": ""
            }
          ],
          "queryParam": [],
          "bodyParam": [],
          "bodyInfo": {
            "type": 1,
            "rawType": 2,
            "rawTextRemark": "",
            "rawFileRemark": "",
            "rawText": "",
            "rawJSON": [
              {
                "name": "value",
                "must": 1,
                "type": 0,
                "remark": "偏好设置值（1.住宅缴费，2.写字楼缴费）",
                "show": 1,
                "mock": "",
                "drag": 1
              }
            ],
            "rawJSONType": 0
          },
          "outParam": [
            {
              "name": "code",
              "type": 0,
              "remark": "",
              "must": 1,
              "mock": "0"
            },
            {
              "name": "message",
              "type": 0,
              "remark": "",
              "must": 1,
              "mock": "操作成功"
            },
            {
              "name": "data",
              "type": 0,
              "remark": "",
              "must": 1,
              "mock": ""
            }
          ],
          "outInfo": {
            "type": 0,
            "rawRemark": "",
            "rawMock": "",
            "jsonType": 0
          },
          "restParam": []
        }
      ],
      "finish": 0,
      "sort": 0,
      "name": "保存用户偏好设置",
      "url": "/charging-api/rest-api/v1/preferenceSet/save",
      "remark": "",
      "method": "POST",
      "createdAt": "2019-02-26 16:29:38",
      "updatedAt": "2019-02-26 16:29:38",
      "__v": 0
    },
    {
      "param": [
        {
          "before": {
            "mode": 0,
            "code": ""
          },
          "after": {
            "mode": 0,
            "code": ""
          },
          "name": "参数",
          "id": "49bdde20-b052-4af5-9368-7026c8432419",
          "remark": "",
          "header": [],
          "queryParam": [],
          "outParam": [
            {
              "name": "code",
              "type": 0,
              "remark": "",
              "must": 1,
              "mock": "0"
            },
            {
              "name": "message",
              "type": 0,
              "remark": "",
              "must": 1,
              "mock": "操作成功"
            },
            {
              "name": "data",
              "type": 0,
              "remark": "偏好设置值（0：未设置，1.住宅缴费，2.写字楼缴费）",
              "must": 1,
              "mock": ""
            }
          ],
          "outInfo": {
            "type": 0,
            "rawRemark": "",
            "rawMock": "",
            "jsonType": 0
          },
          "restParam": []
        }
      ],
      "finish": 0,
      "sort": 0,
      "name": "获取用户偏好设置",
      "url": "/charging-api/rest-api/v1/preferenceSet/getByUser",
      "remark": "",
      "method": "GET",
      "createdAt": "2019-02-26 16:29:00",
      "updatedAt": "2019-02-26 16:29:00",
      "__v": 0
    }
  ]
}
getHttpString = (method, url, title, objName) => {
  if (method === 'GET') {
    return `
    // ${title} ${method}
    export function ${url} (form) {
      return Vue.http.${method.toLowerCase()}(Utils.paths.${objName}.${url}, { params: form })
    }\n`
  } else if (method === 'POST') {
    return `
    // ${title} ${method}
    export function ${url} (form) {
      return Vue.http.${method.toLowerCase()}(Utils.paths.${objName}.${url}, form, { emulateJSON: false }, {headers: { 'ContentType': 'application/json' }})
    }\n`
  }
}
console.log(typeof util.data)
let httpString = ''
let utilString = ''
// 标题
let title = ''
// 方法
let url = ''
// util.data.forEach(item => {
  util.data.forEach(subItem => {
    title = subItem.name.replace(/\d、/, '')
    url = subItem.url.match(/([^/]*)$/)[1]
    utilString += `// ${title}\n'${url}': host.hostPrime + '${subItem.url}',\n`
    httpString += getHttpString(subItem.method, url, title, 'paymentWeb')
  })
// })
console.log(utilString)