const util = {"name":"邮件服务设置","flag":"SBDoc","data":[{"param":[{"before":{"mode":0,"code":""},"after":{"mode":0,"code":""},"name":"参数","id":"2220869b-409b-4812-b208-4f3b6e1c5fd3","remark":"","header":[{"name":"Content-Type","value":"application/json","remark":""}],"queryParam":[],"bodyParam":[],"bodyInfo":{"type":1,"rawType":2,"rawTextRemark":"","rawFileRemark":"","rawText":"","rawJSON":[{"name":"templateId","must":1,"type":0,"remark":"id","mock":"10032","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"10032","remark":""}]}},{"name":"organId","must":1,"type":1,"remark":"机构id","mock":"61","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"61","remark":""}]}},{"name":"templateTitle","must":1,"type":0,"remark":"标题","mock":"标题1","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"标题1","remark":""}]}},{"name":"templateName","must":1,"type":0,"remark":"名称","mock":"名称1","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"名称1","remark":""}]}},{"name":"templateContent","must":1,"type":0,"remark":"内容","mock":"内容1","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"内容1","remark":""}]}},{"name":"serviceType","must":1,"type":0,"remark":"业务类型","mock":"12","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"12","remark":""}]}},{"name":"issue","must":1,"type":1,"remark":"是否覆盖，0是，1否","mock":"1","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"1","remark":""}]}},{"name":"organIdList","must":1,"type":3,"remark":"项目id列表，必填，为空就是[]空数组","data":[{"name":null,"must":1,"type":1,"remark":"项目id","mock":"1","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"1","remark":""}]}}],"mock":"","drag":1,"show":0}],"rawJSONType":0},"outParam":[{"name":"code","type":0,"remark":"","must":1,"mock":"0"},{"name":"message","type":0,"remark":"","must":1,"mock":"新增成功"},{"name":"data","type":0,"remark":"","must":1,"mock":""}],"outInfo":{"type":0,"rawRemark":"","rawMock":"","jsonType":0},"restParam":[]}],"finish":1,"sort":0,"name":"邮件内容模板-修改接口","url":"/charging-api/rest-api/v1/MailService/Settings/updateMailTemplateConfig","remark":"邮件内容模板-修改接口","method":"POST","createdAt":"2021-01-15 10:49:45","updatedAt":"2021-01-15 11:19:40","__v":0},{"param":[{"before":{"mode":0,"code":""},"after":{"mode":0,"code":""},"name":"参数","id":"c1dbdf00-cca0-4ab1-a09e-e87cc2591930","remark":"","header":[{"name":"Content-Type","value":"application/json","remark":""}],"queryParam":[],"bodyParam":[],"bodyInfo":{"type":1,"rawType":2,"rawTextRemark":"","rawFileRemark":"","rawText":"","rawJSON":[{"name":"organId","must":1,"type":1,"remark":"机构id","mock":"61","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"61","remark":""}]}},{"name":"templateTitle","must":1,"type":0,"remark":"模板标题","mock":"标题","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"标题","remark":""}]}},{"name":"templateName","must":1,"type":0,"remark":"模板名称","mock":"名称","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"名称","remark":""}]}},{"name":"templateContent","must":1,"type":0,"remark":"模板内容","mock":"内容","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"内容","remark":""}]}},{"name":"serviceType","must":1,"type":0,"remark":"业务类型","mock":"21","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"21","remark":""}]}},{"name":"issue","must":1,"type":1,"remark":"是否覆盖0 覆盖  1不覆盖","mock":"0","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"0","remark":""}]}},{"name":"organIdList","must":1,"type":3,"remark":"下发项目列表，空的话就是[]空数组","data":[{"name":null,"must":1,"type":1,"remark":"项目id","mock":"1","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"1","remark":""}]}}],"mock":"","drag":1,"show":0}],"rawJSONType":0},"outParam":[{"name":"code","type":0,"remark":"","must":1,"mock":"0"},{"name":"message","type":0,"remark":"","must":1,"mock":"新增成功"},{"name":"data","type":0,"remark":"","must":1,"mock":""}],"outInfo":{"type":0,"rawRemark":"","rawMock":"","jsonType":0},"restParam":[]}],"finish":1,"sort":0,"name":"邮件内容模板-新增接口","url":"/charging-api/rest-api/v1/MailService/Settings/insertMailTemplateConfig","remark":"邮件内容模板-新增接口","method":"POST","createdAt":"2021-01-15 10:46:00","updatedAt":"2021-01-15 11:19:37","__v":0},{"param":[{"before":{"mode":0,"code":""},"after":{"mode":0,"code":""},"name":"参数","id":"12bb42d5-a4f3-43f2-983f-82f099b7c7fd","remark":"","header":[{"name":"Content-Type","value":"application/json","remark":""}],"queryParam":[],"bodyParam":[],"bodyInfo":{"type":1,"rawType":2,"rawTextRemark":"","rawFileRemark":"","rawText":"","rawJSONType":0,"rawJSON":[{"name":"organId","must":1,"type":1,"remark":"机构id","mock":"1300","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"1300","remark":""}]}},{"name":"status","must":1,"type":1,"remark":"状态1正常，0删除","mock":"1","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"1","remark":""}]}},{"name":"serviceType","must":1,"type":1,"remark":"业务类型","mock":"12","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"12","remark":""}]}},{"name":"templateName","must":1,"type":0,"remark":"名称","mock":"1","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"1","remark":""}]}},{"name":"createTimeSta","must":1,"type":0,"remark":"开始时间 标准时间格式yyyy-mm-dd hh:mm:ss","mock":"2020-1-1","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"2020-1-1","remark":""}]}},{"name":"createTimeEnd","must":1,"type":0,"remark":"结束时间 标准时间格式yyyy-mm-dd hh:mm:ss","mock":"2020-1-1","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"2020-1-1","remark":""}]}}]},"outParam":[{"name":"code","type":0,"remark":"0正常 -1 失败","must":1,"mock":"0"},{"name":"message","type":0,"remark":"信息","must":1,"mock":"查询"},{"name":"data","type":3,"remark":"","must":1,"mock":"","data":[{"name":null,"type":4,"remark":"","must":1,"mock":"","data":[{"name":"version","type":5,"remark":"","must":1,"mock":""},{"name":"templateId","type":1,"remark":"id","must":1,"mock":"99998"},{"name":"organId","type":1,"remark":"机构id","must":1,"mock":"1300"},{"name":"templateName","type":0,"remark":"名称","must":1,"mock":"test"},{"name":"templateTitle","type":0,"remark":"标题","must":1,"mock":"测试"},{"name":"templateContent","type":0,"remark":"内容","must":1,"mock":"公司名称${company_name}//项目名称${organ_name}//截止时间${deadline_time}//房屋名称${house_name}//合同编码${contact_code}//费用合计${fee_count}//开票金额${invoice_fee}//欠费本金${capital_fee}//客户名称${cust_name} //欠费滞纳金${capital_lfee}//税额${rate_all}//应收账期${billing_cycle}//费用科目${fee_item_type_id}"},{"name":"serviceType","type":1,"remark":"业务类型","must":1,"mock":"13"},{"name":"status","type":1,"remark":"状态","must":1,"mock":"1"},{"name":"createUserId","type":5,"remark":"创建人id","must":1,"mock":""},{"name":"createUserName","type":0,"remark":"创建人id名称","must":1,"mock":""},{"name":"createTime","type":5,"remark":"创建时间","must":1,"mock":""},{"name":"updateUserId","type":5,"remark":"更新人id","must":1,"mock":""},{"name":"updateUserName","type":0,"remark":"更新人名称","must":1,"mock":""},{"name":"updateTime","type":5,"remark":"更新时间","must":1,"mock":""},{"name":"remark","type":0,"remark":"备注","must":1,"mock":"hhd测试"}]}]}],"outInfo":{"type":0,"rawRemark":"","rawMock":"","jsonType":0},"restParam":[]}],"finish":1,"sort":0,"name":"邮件内容模板-查询接口","url":"/charging-api/rest-api/v1/MailService/Settings/selectMailTemplateConfig","remark":"邮件内容模板-查询接口","method":"POST","createdAt":"2021-01-15 10:52:39","updatedAt":"2021-01-15 15:36:27","__v":0},{"param":[{"before":{"mode":0,"code":""},"after":{"mode":0,"code":""},"name":"参数","id":"1d58f4c9-564c-431a-bf11-7910c3727de9","remark":"","header":[{"name":"Content-Type","value":"application/json","remark":""}],"queryParam":[],"bodyParam":[],"bodyInfo":{"type":1,"rawType":2,"rawTextRemark":"","rawFileRemark":"","rawText":"","rawJSON":[{"name":"organId","must":1,"type":1,"remark":"组织机构ID（一级组织机构）","mock":"1","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"1","remark":""}]}},{"name":"mailConfigId","must":1,"type":1,"remark":"id","show":0,"mock":"","drag":1},{"name":"mailHost","must":1,"type":0,"remark":"邮件服务器主机名","mock":"22","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"22","remark":""}]}},{"name":"mailPort","must":1,"type":0,"remark":"邮件服务器端口","mock":"33","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"33","remark":""}]}},{"name":"mailProtocol","must":1,"type":0,"remark":"邮件服务器协议，如smtp","mock":"44","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"44","remark":""}]}},{"name":"mailUsername","must":1,"type":0,"remark":"邮件用户名","mock":"55","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"55","remark":""}]}},{"name":"mailPassword","must":1,"type":0,"remark":"邮件用秘钥","mock":"66","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"66","remark":""}]}},{"name":"mailLinkOutTime","must":1,"type":1,"remark":"邮件连接超时时间","mock":"77","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"77","remark":""}]}},{"name":"mailReceiveOutTime","must":1,"type":0,"remark":"邮件接受超时时间","mock":"88","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"88","remark":""}]}},{"name":"mailSendOutTime","must":1,"type":0,"remark":"邮件接收超时时间","mock":"99","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"99","remark":""}]}}],"rawJSONType":0},"outParam":[{"name":"code","type":0,"remark":"0成功-1失败","must":1,"mock":"0"},{"name":"message","type":0,"remark":"信息","must":1,"mock":"新增成功"},{"name":"data","type":0,"remark":"数据","must":1,"mock":""}],"outInfo":{"type":0,"rawRemark":"","rawMock":"","jsonType":0},"restParam":[]}],"finish":1,"sort":0,"name":"邮件服务器设置-修改接口","url":"/charging-api/rest-api/v1/MailService/Settings/updateMailServiceSettings","remark":"邮件服务器设置-修改接口","method":"POST","createdAt":"2021-01-13 10:13:27","updatedAt":"2021-01-15 11:19:31","__v":0},{"param":[{"before":{"mode":0,"code":""},"after":{"mode":0,"code":""},"name":"参数","id":"1d58f4c9-564c-431a-bf11-7910c3727de9","remark":"","header":[{"name":"Content-Type","value":"application/json","remark":""}],"queryParam":[],"bodyParam":[],"bodyInfo":{"type":1,"rawType":2,"rawTextRemark":"","rawFileRemark":"","rawText":"","rawJSON":[{"name":"organId","must":1,"type":1,"remark":"组织机构ID（一级组织机构）","mock":"1","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"1","remark":""}]}},{"name":"mailHost","must":1,"type":0,"remark":"邮件服务器主机名","mock":"22","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"22","remark":""}]}},{"name":"mailPort","must":1,"type":0,"remark":"邮件服务器端口","mock":"33","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"33","remark":""}]}},{"name":"mailProtocol","must":1,"type":0,"remark":"邮件服务器协议，如smtp","mock":"44","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"44","remark":""}]}},{"name":"mailUsername","must":1,"type":0,"remark":"邮件用户名","mock":"55","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"55","remark":""}]}},{"name":"mailPassword","must":1,"type":0,"remark":"邮件用秘钥","mock":"66","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"66","remark":""}]}},{"name":"mailLinkOutTime","must":1,"type":1,"remark":"邮件连接超时时间","mock":"77","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"77","remark":""}]}},{"name":"mailReceiveOutTime","must":1,"type":0,"remark":"邮件接受超时时间","mock":"88","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"88","remark":""}]}},{"name":"mailSendOutTime","must":1,"type":0,"remark":"邮件接收超时时间","mock":"99","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"99","remark":""}]}}],"rawJSONType":0},"outParam":[{"name":"code","type":0,"remark":"0成功-1失败","must":1,"mock":"0"},{"name":"message","type":0,"remark":"信息","must":1,"mock":"新增成功"},{"name":"data","type":0,"remark":"数据","must":1,"mock":""}],"outInfo":{"type":0,"rawRemark":"","rawMock":"","jsonType":0},"restParam":[]}],"finish":1,"sort":0,"name":"邮件服务器设置-新增接口","url":"/charging-api/rest-api/v1/MailService/Settings/insertMailServiceSettings","remark":"邮件服务器设置-新增接口","method":"POST","createdAt":"2021-01-13 10:05:28","updatedAt":"2021-01-15 11:19:32","__v":0},{"param":[{"before":{"mode":0,"code":""},"after":{"mode":0,"code":""},"name":"参数","id":"1d58f4c9-564c-431a-bf11-7910c3727de9","remark":"","header":[{"name":"Content-Type","value":"application/json","remark":""}],"queryParam":[],"bodyParam":[],"bodyInfo":{"type":1,"rawType":2,"rawTextRemark":"","rawFileRemark":"","rawText":"","rawJSON":[{"name":"organId","must":1,"type":1,"remark":"组织机构ID（一级组织机构）","mock":"1","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"1","remark":""}]}}],"rawJSONType":0},"outParam":[{"name":"code","type":0,"remark":"","must":1,"mock":"0"},{"name":"message","type":0,"remark":"","must":1,"mock":"查询"},{"name":"data","type":4,"remark":"","must":1,"mock":"","data":[{"name":"mailConfigId","type":1,"remark":"id","must":1,"mock":""},{"name":"organId","type":1,"remark":"机构id","must":1,"mock":""},{"name":"mailHost","type":0,"remark":"邮箱地址","must":1,"mock":""},{"name":"mailPort","type":1,"remark":"端口","must":1,"mock":""},{"name":"mailProtocol","type":0,"remark":"协议","must":1,"mock":""},{"name":"mailUsername","type":0,"remark":"名称","must":1,"mock":""},{"name":"mailPassword","type":0,"remark":"密码","must":1,"mock":""},{"name":"mailLinkOutTime","type":1,"remark":"连接超时","must":1,"mock":""},{"name":"mailReceiveOutTime","type":0,"remark":"接受超时","must":1,"mock":""},{"name":"mailSendOutTime","type":0,"remark":"接收超时","must":1,"mock":""},{"name":"mailSender","type":5,"remark":"发件人","must":1,"mock":""},{"name":"mailFrom","type":5,"remark":"发件人邮箱","must":1,"mock":""},{"name":"status","type":1,"remark":"状态1正常0 删除","must":1,"mock":""},{"name":"createUserId","type":1,"remark":"创建人id","must":1,"mock":""},{"name":"createUserName","type":0,"remark":"创建人","must":1,"mock":""},{"name":"createTime","type":1,"remark":"创建时间","must":1,"mock":""},{"name":"updateUserId","type":5,"remark":"更新id","must":1,"mock":""},{"name":"updateUserName","type":5,"remark":"更新人","must":1,"mock":""},{"name":"updateTime","type":5,"remark":"更新时间","must":1,"mock":""},{"name":"remark","type":5,"remark":"备注","must":1,"mock":""}]}],"outInfo":{"type":0,"rawRemark":"","rawMock":"","jsonType":0},"restParam":[]}],"finish":1,"sort":0,"name":"邮件服务器设置-查询接口","url":"/charging-api/rest-api/v1/MailService/Settings/selectMailServiceSettings","remark":"邮件服务器设置-新增接口","method":"POST","createdAt":"2021-01-13 10:14:54","updatedAt":"2021-01-15 11:19:34","__v":0},{"param":[{"before":{"mode":0,"code":""},"after":{"mode":0,"code":""},"name":"参数","id":"cf4b185e-121e-445a-8e0a-0476efa7f420","remark":"","header":[{"name":"Content-Type","value":"application/json","remark":""}],"queryParam":[],"bodyParam":[],"bodyInfo":{"type":1,"rawType":2,"rawTextRemark":"","rawFileRemark":"","rawText":"","rawJSON":[{"name":"templateId","must":1,"type":0,"remark":"id","mock":"10032","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"10032","remark":""}]}},{"name":"status","must":1,"type":1,"remark":"状态：1启用，0删除","mock":"0","drag":1,"show":0,"value":{"type":0,"status":"","data":[{"value":"0","remark":""}]}}],"rawJSONType":0},"outParam":[{"name":"code","type":0,"remark":"0成功-1失败","must":1,"mock":"0"},{"name":"message","type":0,"remark":"信息","must":1,"mock":"操作成功"},{"name":"data","type":0,"remark":"","must":1,"mock":""}],"outInfo":{"type":0,"rawRemark":"","rawMock":"","jsonType":0},"restParam":[]}],"finish":1,"sort":0,"name":"邮箱内容设置-停用启用","url":"/charging-api/rest-api/v1/MailService/Settings/updateStatus","remark":"邮箱内容设置-停用启用","method":"POST","createdAt":"2021-01-15 11:17:33","updatedAt":"2021-01-15 15:36:40","__v":0}]}
getHttpString = (method, url, title, objName) => {
  if (method === 'GET') {
    return `
    // ${title} ${method}
    export function ${url} (params) {
      return http({ method: '${method.toLowerCase()}', url: ${objName}.${url}, params })
    }`
  } else if (method === 'POST') {
    return `
    // ${title} ${method}
    export function ${url} (params) {
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
    httpString += getHttpString(subItem.method, url, title, 'charging')
  // })
})
console.log(utilString)
console.log(httpString)