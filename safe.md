# 前端安全

## XSS
[前端安全系列（一）：如何防止XSS攻击？](https://juejin.cn/post/6844903685122703367)

### 什么是XSS
Cross-Site Scripting（跨站脚本攻击）简称 XSS，是一种代码注入攻击。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如 Cookie、SessionID 等，进而危害数据安全。

### 注入方法

### XSS攻击类型
1. 存储型 XSS
2. 反射型 XSS
3. DOM 型 XSS

### 常用防范方法
1. httpOnly
2. 输入过滤
3. 转义 HTML
4. CSP(设置禁止加载外域脚本)
5. 避免使用未经处理的、用户提供的内容

## CSRF
[前端安全系列之二：如何防止CSRF攻击？](https://juejin.cn/post/6844903689702866952)

### 什么是CSRF
CSRF（Cross-site request forgery）跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证(cookie)，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。

### 常用防范方法
1. 同源检测,判断来源域名(Origin Header,Referer Header)
2. Samesite Cookie属性(Samesite=Lax)
3. 后端不要在GET接口中做用户操作
4. Token验证，双重cookie
